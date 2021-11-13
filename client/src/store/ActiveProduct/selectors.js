const getActiveVariant= () => state => state.activeProduct.currentVariant.data
const isLoading= () => state => state.activeProduct.currentVariant.isLoading
const getColors = () => state => state.activeProduct.colors
const getSizes = () => state => state.activeProduct.sizes

export default {getActiveVariant, getColors, isLoading, getSizes}