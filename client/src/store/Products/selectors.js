const getProducts = () => (state) => state.products
const getProductsList = () => (state) => state.products.list

export default {
	getProducts,
	getProductsList
}