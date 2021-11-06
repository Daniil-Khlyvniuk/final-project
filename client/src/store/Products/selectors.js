const getProducts = () => (state) => state.products.data
const getIsLoading = () => (state) => state.products.getIsLoading
const getError = () => (state) => state.products.error

export default {
	getProducts,
	getIsLoading,
	getError,
}