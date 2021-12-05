const ProductVariant = require("../models/ProductVariant")
const Catalog = require("../models/Catalog")
const Color = require("../models/Color")
const Size = require("../models/Size")

module.exports = (matchCondition = {}) => {
	return [
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
				$match:{
					...(
						matchCondition?.productQuery
						? { $and: matchCondition?.productQuery }
							:{}
					)
				}
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
								...(
									matchCondition?.variantQuery
										? { $and: [
												...matchCondition?.variantQuery || {},
												{
													$expr: {
														$eq: [ "$product", "$$productId" ],
													},
												},
											] }
										:{}
								)
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
	]
}
