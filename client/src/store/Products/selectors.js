const getProducts = () => state => state.products.data
const getIsLoading = () => (state) => state.products.isLoading
const getError = () => (state) => state.products.error
const getRelatedIds = () => state => state.products.relatedArray
const getRelatedProductsList = () => state => state.products.relatedProductsList

export default {
	getProducts,
	getIsLoading,
	getError,
	getRelatedIds,
	getRelatedProductsList,
}