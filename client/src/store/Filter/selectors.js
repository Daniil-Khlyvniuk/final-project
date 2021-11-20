const getFilters = () => state => state.filter
const getColors = () => state => state.filter.color
const checkCategory = (name) => state => state.filter.category?.includes(name)
const checkColor = (name) => state => state.filter.color?.includes(name)
const checkSize = (name) => state => state.filter.size?.includes(name)
const getPerPage = () => state => state.filter.getPerPage
const getSort = () => state => state.filter.sort

const forExport = {
	getFilters,
	getColors,
	checkCategory,
	checkColor,
	checkSize,
	getPerPage,
	getSort,
}

export default forExport