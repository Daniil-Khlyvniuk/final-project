const mongoose = require("mongoose");
const Product = require("../models/Product");
const ProductVariant = require("../models/ProductVariant");
const Color = require("../models/Color");
const Catalog = require("../models/Catalog");
const Size = require("../models/Size");
const fileService = require("../services/fileService");
const notFoundError = require("../commonHelpers/notFoundError");
const filterOneVariant = require("../commonHelpers/filterOneVariant");
const isExist = require("../commonHelpers/isExist");
const findOrCreate = require("../commonHelpers/findOrCreate");
const ObjectId = mongoose.Types.ObjectId;
const getProductAggregateParams = require("../commonHelpers/getProductAggregateParams");
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(0, 999999);
const queryCreator = require("../commonHelpers/queryCreator");
const filterParser = require("../commonHelpers/filterParser");
const _ = require("lodash");
const {
  getFilterConditions,
  getSortConditions,
} = require("../commonHelpers/getFilterConditions");


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
    const category = await Catalog.findOne({
      name: productData.categories,
    });

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
	const [, projectGroup] = getProductAggregateParams()

	try {
		const variant = await Product.aggregate([
      {
        $lookup: {
          from: ProductVariant.collection.name,
          let: {
            productId: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
										{ "$eq": [ "$_id", ObjectId(varId) ] },
	                  { "$eq": [ "$product", "$$productId" ] },
                  ],
                },
              },
            },
          ],
          as: "variants",
        },
      },
      {
        $unwind: {
          path: "$variants",
        },
      },
			...projectGroup
    ]);

    if (!variant)
      res
        .status(400)
        .json({ message: `Variant with id "${varId}" not found ` });


		const result = variant[0]

    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}"`,
    });
  }
};

exports.decrementVariantQuantity = async (req, res, next) => {
	const newQuantity = Math.max(0, req.body.quantity)
	const id = req.params.varId


	try{
		const variant = await ProductVariant.findById(id)
		if (variant.quantity < newQuantity) throw new Error("insufficient quantity of goods in the store")

		const updatedVariant = await ProductVariant.findByIdAndUpdate(
			id,
		{
			quantity: newQuantity,
				enabled: !!newQuantity
		},
		{new: true}
		)
		res.json(updatedVariant)
	}catch (err) {
		res.status(400).json({ message: `Error happened on server: "${err}"` });
	}
}

exports.getProductsInfo = async (req, res, next) => {
  const { productId, kindOfInfo } = req.params;

  try {
    const variant = await ProductVariant.find({
      product: productId,
    }).populate(kindOfInfo);

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

exports.getMinMaxPrice = async (req, res, next) => {
	const mongooseQuery = filterParser(req.query);
	const { variantQuery, productQuery } = getFilterConditions(mongooseQuery);
  try {
    const minmax = await Product.aggregate([
			{
				$lookup: {
					from: Catalog.collection.name,
					localField: "categories",
					foreignField: "_id",
					as: "categories",
				},
			},
			{
				$unwind: "$categories",
			},
			{
				$match: {
					$and: productQuery,
				},
			},
			{
				$lookup: {
					from: ProductVariant.collection.name,
					let: {
						productId: "$_id",
					},
					pipeline: [
						{
							$lookup: {
								from: Color.collection.name,
								localField: "color",
								foreignField: "_id",
								as: "color",
							},
						},
						{
							$unwind: "$color",
						},
						{
							$lookup: {
								from: Size.collection.name,
								localField: "size",
								foreignField: "_id",
								as: "size",
							},
						},
						{
							$unwind: "$size",
						},
						{
							$match: {
								$and: [
									...variantQuery,
									{
										$expr: {
											$eq: [ "$product", "$$productId" ],
										},
									},
								]
							}
						},
					],
					as: "variants",
				},
			},
			{
				$unwind: {
					path: "$variants",
				},
			},
			{
				$project: {
					_id: 1,
					name: 1,
					categories: 1,
					productUrl: 1,
					brand: 1,
					manufacturer: 1,
					manufacturerCountry: 1,
					seller: 1,
					description: 1,
					date: 1,
					variants: 1,
				},
			},
      {
        $group: {
          _id: null,
          min: { $min: "$variants.currentPrice" },
          max: { $max: "$variants.currentPrice" },
        },
      },
    ]);

    res.json(minmax);
  } catch (err) {
    res.status(400).json({ message: `Error happened on server: "${err}"` });
  }
};

exports.getFilteredVariants = async (req, res, next) => {
  const { productId, filterParam, filterParamId } = req.params;

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

exports.getProducts = async (req, res, next) => {
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  try {
    const products = await Product.find()
      .skip(startPage * perPage - perPage)
      .limit(perPage)
      .sort(sort)
      .populate({
        path: "variants",
        perDocumentLimit: 1,
      });

    const result = filterOneVariant(products)

    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `,
    });
  }
};

exports.getVariantsByProductId = async (req, res, next) => {
  const productId = req.params.productId;


  try {
    const variant = await ProductVariant.find({ product: productId })
      .populate("size")
      .populate("color")
      .populate("product");
    if (!variant)
      res.status(400).json({
        message: `Variant with id "${productId}" not found `,
      });

    res.json(variant);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}"`,
    });
  }
};

exports.getProductsFilterParams = async (req, res, next) => {
  const mongooseQuery = filterParser(req.query);
  const matchParams = getFilterConditions(mongooseQuery);
	const [lookUpParams, projectGroup] = getProductAggregateParams(matchParams)
  const sortParam = getSortConditions(req.query.sort);
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);


	try {
    const products = await Product.aggregate([
			...lookUpParams,
			...projectGroup,
      sortParam,
			{
				$skip: startPage * perPage - perPage
			},
      { $limit: perPage },
    ]);

    res.json(products);
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

  const query = req.body.query.toLowerCase().trim().replace(/\s\s+/g, " ");
	const [, projectGroup] = getProductAggregateParams()
	const perPage = Number(req.query.perPage);
	const startPage = Number(req.query.startPage);

	try {
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
									prefixLength: 1,
									maxExpansions: 256,
								},
							},
						},
						{
							autocomplete: {
								query: query,
								path: "brand",
								fuzzy: {
									maxEdits: 1,
									prefixLength: 1,
									maxExpansions: 256,
								},
							},
						},
						{
							autocomplete: {
								query: query,
								path: "description",
								fuzzy: {
									maxEdits: 1,
									prefixLength: 1,
									maxExpansions: 256,
								},
							},
						},
					],
				},
			},
		},
		{
			$lookup: {
				from: Catalog.collection.name,
				localField: "categories",
				foreignField: "_id",
				as: "categories",
			},
		},
		{
			$unwind: "$categories",
		},
		{
			$lookup: {
				from: ProductVariant.collection.name,
				let: {
					productId: "$_id",
				},
				pipeline: [
					{
						$lookup: {
							from: Color.collection.name,
							localField: "color",
							foreignField: "_id",
							as: "color",
						},
					},
					{
						$unwind: "$color",
					},
					{
						$lookup: {
							from: Size.collection.name,
							localField: "size",
							foreignField: "_id",
							as: "size",
						},
					},
					{
						$unwind: "$size",
					},
					{
						$match: {
							$expr: {
								"$eq": [ "$product", "$$productId" ]
							},
						},
					},
					{$limit: 1},
				],
				as: "variants",
			},
		},
		{
			$unwind: "$variants",
		},
		...projectGroup,
		{
			$skip: startPage * perPage - perPage
		},
		{ $limit: perPage },
	]);
	res.json(foundProducts);
	} catch (err) {
		res.status(400).json({
			message: `Error happened on server: "${err}" `,
		});
	}
};

exports.updateProduct = (req, res, next) => {
	Product.findOne({ _id: req.params.id })
	.then((product) => {
		if (!product) {
			return res.status(400).json({
				message: `Product with id "${ req.params.id }" is not found.`,
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
					message: `Error happened on server: "${ err }" `,
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
					message: `Error happened on server: "${ err }" `,
				})
			);
		}
	})
	.catch((err) =>
		res.status(400).json({
			message: `Error happened on server: "${ err }" `,
		})
	);
}

