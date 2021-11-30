const getIsLaunchedByUser = () => state => state.filter.isLaunchedByUser
const getInfinityScrollHasMore = () =>
	state => state.filter.infinityScrollHasMore
const getFilters = () => state => state.filter.data
const getIsLoading = () => state => state.filter.isLoading
const getColors = () => state => state.filter.data.color
const checkCategory = (name) => state => 
	state.filter.data.category.includes(name)
const checkColor = (name) => state => 
	state.filter.data.color.includes(name)
const checkSize = (name) => state => state.filter.data.size.includes(name)


const forExport = {
	getIsLaunchedByUser,
	getInfinityScrollHasMore,
	getFilters,
	getIsLoading,
	getColors,
	checkCategory,
	checkColor,
	checkSize,
}

export default forExport