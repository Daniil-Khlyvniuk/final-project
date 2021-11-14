const Product = require("../models/Product");

module.exports = async (Model, filter, newData) => {
	let product = await Model.findOne(filter)
	if (!product) product = await Product.create(newData);
	return product
};