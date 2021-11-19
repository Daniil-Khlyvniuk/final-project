const getFilters = () => state => state.filter
const checkCategory = (name) => state => state.filter.category?.includes(name)
const checkColor = (name) => state => state.filter.color?.includes(name)
const checkSize = (name) => state => state.filter.size?.includes(name)

const forExport = {
	getFilters,
	checkCategory,
	checkColor,
	checkSize,
}

export default forExport