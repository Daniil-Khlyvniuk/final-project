module.exports = (products) => products.map(({ _doc: product }) => ({
	...product,
	variants: product.variants[0],
}));