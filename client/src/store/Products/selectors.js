const getProducts = () => state => state.products.data
const getCatalog = () => state => state.products.catalog
const getIsLoading = () => (state) => state.products.isLoading
const getError = () => (state) => state.products.error
const getRelatedIds = () => state => state.products.relatedArray
const getRelatedProductsList = () => state => state.products.relatedProductsList

export default {
	getProducts,
	getCatalog,
	getIsLoading,
	getError,
	getRelatedIds,
	getRelatedProductsList,
}

