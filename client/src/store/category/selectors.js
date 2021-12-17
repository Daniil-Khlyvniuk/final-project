const getCategoryTree = () => state => state.category.categoryTree
const getCategory = () => state => state.category.category
const getIsLoading = () => state => state.category.isLoading
const getError = () => state => state.category.error

export default {
	getCategoryTree,
	getCategory,
	getIsLoading,
	getError
}