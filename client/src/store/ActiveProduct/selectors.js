const getActiveVariant= () => state => state.activeProduct.currentVariant.data
const isLoading= () => state => state.activeProduct.currentVariant.isLoading
const getColors = () => state => state.activeProduct.colors
const getSizes = () => state => state.activeProduct.sizes
const getActiveColor = () => state => state.activeProduct.activeColor
const getParent = () => state => state.activeProduct.parent

// eslint-disable-next-line max-len
export default {getActiveVariant, getColors, isLoading, getSizes, getActiveColor, getParent}