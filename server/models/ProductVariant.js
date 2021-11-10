const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductVariantSchema = new Schema(
	{
		product: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
		itemNo: {
			type: String,
			required: true
		},
		enabled: {
			type: Boolean,
			required: true,
			default: true
		},
		currentPrice: {
			type: Number,
			required: true
		},
		previousPrice: {
			type: Number
		},
		imageUrls: [
			{
				type: String,
				required: true
			}
		],
		quantity: {
			type: Number,
			required: true,
			default: 0
		},
		color: String,
		size: String,
		date: {
			type: Date,
			default: Date.now
		}
	},
	{ strict: false }
);

ProductVariantSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("ProductVariant", ProductVariantSchema);
