const Product = require("../models/Product");
const ProductVariant = require("../models/ProductVariant");
const Cart = require("../models/Cart");
const mongoose = require("mongoose");

module.exports = async customerId => {
  try {
    const cart = await Cart.findOne({ customerId: customerId });

		return await cart.products.reduce(
			async (resultPromise, cartItem) => {
				const result = await resultPromise;
				const dbProduct = await ProductVariant.findOne({
					_id: cartItem.product._id
				});

				result.push({
					_id: new mongoose.Types.ObjectId(),
					product: dbProduct,
					cartQuantity: cartItem.cartQuantity
				});
				return result;
			},
			Promise.resolve([])
		);

  } catch (err) {
    return {
      message: `Error happened on server: "${err}" `
    };
  }
};
