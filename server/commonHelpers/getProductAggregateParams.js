const ProductVariant = require("../models/ProductVariant")
const Catalog = require("../models/Catalog")
const Color = require("../models/Color")
const Size = require("../models/Size")

module.exports = (matchCondition = {}) => (
	[
		[
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
					$and: matchCondition.productQuery,
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
									...matchCondition.variantQuery,
									{
										$expr: {
											$eq: [ "$product", "$$productId" ],
										},
									},
								]
							}
						},
						{ $limit: 1 },
					],
					as: "variants",
				},
			},
			{
				$unwind: {
					path: "$variants",
				},
			},
		],
		[
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
		]
	])
// 	{
// 		$unwind: {
// 			path: "$variants",
// 			preserveNullAndEmptyArrays: true,
// 		},
// 	},
// 	{
// 		$lookup: {
// 			from: Catalog.collection.name,
// 			localField: "categories",
// 			foreignField: "_id",
// 			as: "categories",
// 		},
// 	},
// 	{
// 		$unwind: "$categories",
// 	},
// 	{
// 		$lookup: {
// 			from: Color.collection.name,
// 			localField: "variants.color",
// 			foreignField: "_id",
// 			as: "variants.color",
// 		},
// 	},
// 	{
// 		$unwind: "$variants.color",
// 	},
// 	{
// 		$lookup: {
// 			from: Size.collection.name,
// 			localField: "variants.size",
// 			foreignField: "_id",
// 			as: "variants.size",
// 		},
// 	},
// 	{
// 		$unwind: "$variants.size",
// 	},
// 	{
// 		$match: {
// 			$and: matchCondition,
// 		},
// 	},
// ])