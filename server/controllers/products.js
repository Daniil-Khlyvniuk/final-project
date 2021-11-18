const Product = require("../models/Product");
const ProductVariant = require("../models/ProductVariant");
const Color = require("../models/Color");
const Catalog = require("../models/Catalog");
const Size = require("../models/Size");
const fileService = require("../services/fileService");
const notFoundError = require("../commonHelpers/notFoundError");
const isExist = require("../commonHelpers/isExist");
const findOrCreate = require("../commonHelpers/findOrCreate");
const queryString = require("query-string");
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(0, 999999);

const queryCreator = require("../commonHelpers/queryCreator");
const filterParser = require("../commonHelpers/filterParser");
const _ = require("lodash");

exports.addProduct = async (req, res) => {
  const {
    name,
    categories,
    description,
    brand,
    manufacturer,
    manufacturerCountry,
    seller,
    variants = [],
    size: sizeName, // do not touch
    color: colorName, // do not touch
    ...variantData
  } = req.body;

  const imageUrls = fileService.saveFile(req?.files?.img, "goods"); // save images
  variantData.itemNo = rand().toString();
  variantData.imageUrls = imageUrls;

  const productData = {
    name: name.toLowerCase().trim().replace(/\s\s+/g, " "),
    categories,
    brand,
    manufacturer,
    manufacturerCountry,
    seller,
    variants,
    description,
  };
  try {
    const category = await Catalog.findOne({ name: productData.categories });
    notFoundError(category, productData.categories);
    const product = await findOrCreate(
      Product,
      {
        name: productData.name,
        categories: category._id,
      },
      {
        ...productData,
        categories: category,
      }
    );

    const color = await Color.findOne({ name: colorName });
    notFoundError(color, colorName);

    const size = await Size.findOne({ name: sizeName });
    notFoundError(size, sizeName);

    const isVarExist = await ProductVariant.findOne({
      product: product._id,
      color: color._id,
      size: size._id,
    });

    isExist(isVarExist, "variant");

    const newVariant = await ProductVariant.create({
      ...variantData,
      size: size,
      color: color,
      product,
    });

    product.variants.push(newVariant);
    const updatedProduct = await Product.findByIdAndUpdate(
      product._id,
      {
        ...product,
        $push: { variants: product.variants },
      },
      { new: true }
    );
    return res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}"`,
    });
  }
};

exports.getVariantById = async (req, res, next) => {
  const varId = req.params.varId;
  try {
    const variant = await ProductVariant.findById(varId)
      .populate("product")
      .populate("size")
      .populate("color");
    if (!variant)
      res
        .status(400)
        .json({ message: `Variant with id "${varId}" not found ` });

    res.json(variant);
  } catch (err) {
    res.status(400).json({ message: `Error happened on server: "${err}"` });
  }
};

exports.getProductsInfo = async (req, res, next) => {
  const { productId, kindOfInfo } = req.params;
  // const kindOfInfo = req.params.kindOfInfo;
  try {
    const variant = await ProductVariant.find({ product: productId }).populate(
      kindOfInfo
    );
    if (!variant)
      res.status(400).json({
        message: `Product with id "${productId}" not found `,
      });

    const allInfo = variant.map((variant) => variant[kindOfInfo]);
    const infoWithOutRepeats = [...new Set(allInfo)];

    res.json(infoWithOutRepeats);
  } catch (err) {
    res.status(400).json({ message: `Error happened on server: "${err}"` });
  }
};

exports.getFilteredVariants = async (req, res, next) => {
  console.log(req.params);
  const { productId, filterParam, filterParamId } = req.params;
  // const filterParam = req.params.filterParam;
  // const filterParamId = req.params.filterParamId;

  try {
    const variant = await ProductVariant.find({
      product: productId,
      [filterParam]: filterParamId,
    })
      .populate("size")
      .populate("color");
    if (!variant)
      res.status(400).json({
        message: `Product with id "${productId}" not found `,
      });

    res.json(variant);
  } catch (err) {
    res.status(400).json({ message: `Error happened on server: "${err}"` });
  }
};

exports.updateProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      if (!product) {
        return res.status(400).json({
          message: `Product with id "${req.params.id}" is not found.`,
        });
      } else {
        const productFields = _.cloneDeep(req.body);

        try {
          productFields.name = productFields.name
            .toLowerCase()
            .trim()
            .replace(/\s\s+/g, " ");
        } catch (err) {
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          });
        }

        const updatedProduct = queryCreator(productFields);

        Product.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedProduct },
          { new: true }
        )
          .then((product) => res.json(product))
          .catch((err) =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `,
            })
          );
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.getProducts = async (req, res, next) => {
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  Product.find()
    .skip(startPage * perPage - perPage)
    .limit(perPage)
    .sort(sort)
    .populate({
      path: "variants",
      options: { perDocumentLimit: 1 },
    })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      });
    });
};

exports.getProductsFilterParams = async (req, res, next) => {
  const mongooseQuery = filterParser(req.query);
  console.log("aaaaaaa", req.query);
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;
  console.log("sort", sort);

  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: ProductVariant.collection.name,
          // localField: "product",
          // foreignField: "_id",
          // let: { variantPrice: "$currentPrice" },
          pipeline: [
            {
              $match: {
                // currentPrice: 222,
                $expr: {
                  $gte: ["$currentPrice", 0],
                },
              },
            },
          ],
          as: "variants",
          // $lookup: {
          //   from: "Colors",
          //   localField: "product",
          //   foreignField: "_id",
          // },
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          variants: 1,
          // variants_test: 1,
          // campId: 1,
          // "articleId": 1,
          // "campaign._id": 1,
          // "campaign.clientid": 1,
          // "campaign.client._id": 1,
          // "campaign.client.username": 1
        },
      },
      {
        $unwind: { path: "$variants", preserveNullAndEmptyArrays: true },
      },
    ]);

    res.json(products);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `,
    });
  }
  //   const products = await Product.find(mongooseQuery)
  //     .skip(startPage * perPage - perPage)
  //     .limit(perPage)
  //     .sort(sort);
  //
  //   const productsQuantity = await Product.find(mongooseQuery);
  //
  //   res.json({ products, productsQuantity: productsQuantity.length });
  // } catch (err) {
  //   res.status(400).json({
  //     message: `Error happened on server: "${err}" `,
  //   });
  // }
};

exports.searchProducts = async (req, res, next) => {
  if (!req.body.query) {
    res.status(400).json({ message: "Query string is empty" });
  }

  const query = req.body.query.toLowerCase().trim().replace(/\s\s+/g, " ");

  let products = await Product.find({
    $text: { $search: query },
  });
  console.log("searchProducts");
  console.log(query);
  console.log("products", products);

  const matchedProducts = await Promise.all(
    products.map(({ _id: productId }) =>
      ProductVariant.find({ product: productId })
        .populate("product")
        .populate("color")
        .populate("size")
    )
  );

  console.log("matchedProducts", matchedProducts);
  console.log("================");
  res.json(matchedProducts.flat());
};

exports.searchAutocomplete = async (req, res, next) => {
  if (!req.body.query) {
    res.status(400).json({ message: "Query string is empty" });
  }

  //Taking the entered value from client in lower-case and trimed
  const query = req.body.query.toLowerCase().trim().replace(/\s\s+/g, " ");
  console.log(query);
  const foundProducts = await Product.aggregate([
    {
      $search: {
        index: "productSearch",
        compound: {
          should: [
            {
              autocomplete: {
                query: query,
                path: "name",
                fuzzy: {
                  maxEdits: 1,
                },
              },
            },
            {
              autocomplete: {
                query: query,
                path: "brand",
                fuzzy: {
                  maxEdits: 1,
                },
              },
            },
          ],
        },
      },
    },
  ]);

  const result = foundProducts.reduce(
    (acc, cur) =>
      (acc = [
        ...acc,
        ...(cur.name.includes(query) ? [cur.name] : []),
        ...(cur.brand.includes(query) ? [cur.brand] : []),
      ]),
    []
  );
  console.log("result", [...new Set(result)]);
  // console.log("result", result);
  res.send([...new Set(result)]);
};
