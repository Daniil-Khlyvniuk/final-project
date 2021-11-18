const getFilters = () => state => state.filter
const checkColor = (name) => state => state.filter.color.includes(name)
const checkSize = (name) => state => state.filter.size.includes(name)
const checkCategory = (name) => state => state.filter.category.includes(name)

const forExport = {
	getFilters,
	checkColor,
	checkSize,
	checkCategory,
}

export default forExport