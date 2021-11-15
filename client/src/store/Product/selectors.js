const getProduct = () => state => state.product.activeProduct
const getParent = () => state => state.product.parent
const isLoading = () => state => state.product.isLoading
const allVarinats = () => state => state.product.variants
const allColors = () => state => state.product.allColors
const allSizes = () => state => state.product.allSizes

export default{
	getProduct,
	getParent ,
	isLoading ,
	allColors,
	allVarinats,
	allSizes }