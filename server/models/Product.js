const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
	  name: {
		  type: String,
		  required: true
	  },
	  categories: {
		  type: String,
		  required: true
	  },
	  variants: [
		  {
			  type: Schema.Types.ObjectId,
			  ref: 'ProductVariant'
		  }
	  ],
	  productUrl: {
		  type: String
	  },
	  brand: {
		  type: String
	  },
	  manufacturer: {
		  type: String
	  },
	  manufacturerCountry: {
		  type: String
	  },
	  seller: {
		  type: String
	  },
	  date: {
		  type: Date,
		  default: Date.now
	  }
  },
  { strict: false }
);

ProductSchema.index({ "$**": "text" });
module.exports = Product = mongoose.model("Product", ProductSchema);
