const Product = require("../models/Product");
const ProductVariant = require("../models/ProductVariant");
const fileService = require("../services/fileService");
const isVariantExist = require("../commonHelpers/isVariantExist");

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
		...variantData
	} = req.body;

	const modifiedName = name
	.toLowerCase()
	.trim()
	.replace(/\s\s+/g, " ");

	const imageUrls = fileService.saveFile(req?.files?.img, "goods") // save images
	variantData.itemNo = rand().toString()
	variantData.imageUrls = imageUrls

	const productData = {
		name: modifiedName,
		categories,
		brand,
		manufacturer,
		manufacturerCountry,
		seller,
		variants
	}

	try {
		let product = await Product.findOne({ name: modifiedName }).populate("variants")
		if (!product) product = await Product.create(productData)

		isVariantExist(product.variants, variantData)

		const newVariant = await ProductVariant.create(variantData)
		const updatedVariant = await ProductVariant.findByIdAndUpdate(newVariant._id, {
			...variantData,
			product
		}, { new: true })
		product.variants.push(updatedVariant)

		const updatedProduct = await Product.findByIdAndUpdate(product._id, product, { new: true }).populate("variants")

		return res.json(updatedProduct);
	} catch (err) {
		res.status(400).json({
			message: `Error happened on server: "${ err }"`,
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

	Product.find()
	.skip(startPage * perPage - perPage)
	.limit(perPage)
	.sort(sort)
	.populate('variants')
	.then((products) => {
		res.send(products);
	})
	.catch((err) => {
		res.status(400).json({
			message: `Error happened on server: "${ err }" `,
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
  let query = req.body.query.toLowerCase().trim().replace(/\s\s+/g, " ");

  // Creating the array of key-words from taken string
  // let queryArr = query.split(" ");

  // Finding ALL products, that have at least one match
  let matchedProducts = await Product.find({
    $text: { $search: query },
  });

  res.send(matchedProducts);
};
