module.exports = async (Model, filter, newData) => {
	let product = await Model.findOne(filter)
	if (!product) product = await Model.create(newData);
	return product
};