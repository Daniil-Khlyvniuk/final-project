const getLinks = () => state => state.links.data
const getIsLoading = () => state => state.links.isLoading
const getError = () => state => state.links.error

export default {getLinks, getIsLoading, getError}