const Product = require("../models/Product");
const ProductVariant = require("../models/ProductVariant");
const Color = require("../models/Color");
const Catalog = require("../models/Catalog");
const Size = require("../models/Size");
const fileService = require("../services/fileService");
const notFoundError = require("../commonHelpers/notFoundError");

const uniqueRandom = require("unique-random");
const rand = uniqueRandom(0, 999999);

const queryCreator = require("../commonHelpers/queryCreator");
const filterParser = require("../commonHelpers/filterParser");
const _ = require("lodash");

exports.addProduct = async (req, res) => {
  const {
    name,
    categories,
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
  };
  try {
    const category = await Catalog.findOne({ name: productData.categories });
    notFoundError(category, productData.categories);

    let product = await Product.findOne({
      name: productData.name,
      categories: category._id,
    });
    if (!product) {
      product = await Product.create({ ...productData, categories: category });
    }
    const color = await Color.findOne({ name: colorName });
    notFoundError(color, colorName);

    const size = await Size.findOne({ name: sizeName });
    notFoundError(size, sizeName);

    const isVarExist = await ProductVariant.findOne({
      product: product._id,
      color: color._id,
      size: size._id,
    });
    if (isVarExist) {
      throw new Error(`The variant already exist`);
    }

    const newVariant = await ProductVariant.create({
      ...variantData,
      size: size,
      color: color,
      product,
    }).catch((err) => {
      console.log("1", err);
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

exports.getProducts = (req, res, next) => {
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  ProductVariant.find()
    .skip(startPage * perPage - perPage)
    .limit(perPage)
    .sort(sort)
    .populate("product")
    .populate("color")
    .populate("size")
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      });
    });
};

exports.getProductById = (req, res, next) => {
  Product.findOne({
    itemNo: req.params.itemNo,
  })
    .then((product) => {
      if (!product) {
        res.status(400).json({
          message: `Product with itemNo ${req.params.itemNo} is not found`,
        });
      } else {
        res.json(product);
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.getProductsFilterParams = async (req, res, next) => {
  const mongooseQuery = filterParser(req.query);
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  try {
    const products = await Product.find(mongooseQuery)
      .skip(startPage * perPage - perPage)
      .limit(perPage)
      .sort(sort);

    const productsQuantity = await Product.find(mongooseQuery);

    res.json({ products, productsQuantity: productsQuantity.length });
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `,
    });
  }
};

exports.searchProducts = async (req, res, next) => {
  if (!req.body.query) {
    res.status(400).json({ message: "Query string is empty" });
  }

  //Taking the entered value from client in lower-case and trimed
  const query = req.body.query.toLowerCase().trim().replace(/\s\s+/g, " ");

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

  const result = await Promise.all(
    foundProducts.map(({ _id }) =>
      Product.findById(_id).populate("variants").populate("categories")
    )
  );
  res.send(result);
};
