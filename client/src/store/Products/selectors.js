const getProducts = () => (state) => state.products.data
const getIsLoading = () => (state) => state.products.isLoading
const getError = () => (state) => state.products.error

export default {
	getProducts,
	getIsLoading,
	getError,
}