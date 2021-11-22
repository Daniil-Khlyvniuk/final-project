const ProductVariant = require("../models/ProductVariant")
const Catalog = require("../models/Catalog")
const Color = require("../models/Color")
const Size = require("../models/Size")

module.exports = (matchCondition) => ([
	{
		$lookup: {
			from: ProductVariant.collection.name,
			localField: "_id",
			foreignField: "product",
			as: "variants",
		},
	},
	{
		$unwind: {
			path: "$variants",
			preserveNullAndEmptyArrays: true,
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
			from: Color.collection.name,
			localField: "variants.color",
			foreignField: "_id",
			as: "variants.color",
		},
	},
	{
		$unwind: "$variants.color",
	},
	{
		$lookup: {
			from: Size.collection.name,
			localField: "variants.size",
			foreignField: "_id",
			as: "variants.size",
		},
	},
	{
		$unwind: "$variants.size",
	},
	{
		$match: {
			$and: matchCondition,
		},
	},
])