const _ = require('lodash')

module.exports = (variants, currentVariant) => {
	const { color, size, currentPrice } = currentVariant
	let price = +currentPrice
	const curVarItems = {
		color,
		size,
		currentPrice: price
	}
	variants.forEach(({ color, size, currentPrice }) => {
		currentPrice = +currentPrice
		const varItems = {
			color,
			size,
			currentPrice
		}
		if (_.isEqual(varItems, curVarItems)) throw new Error("the variant already exist")
	})
}