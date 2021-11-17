const getProducts = () => 	state => state.products.data
const getRelatedIds = () => state => state.products.relatedArray
const getRelatedProductsList = () => state => state.products.relatedProductsList
const getIsLoading = () => (state) => state.products.getIsLoading
const getError = () => (state) => state.products.error

export default {
	getProducts,
	getIsLoading,
	getError,
	getRelatedIds,
	getRelatedProductsList,
}