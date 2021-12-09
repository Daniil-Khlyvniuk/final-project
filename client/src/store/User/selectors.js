const getData = () => state => state.user.data
const getIsLoading = () => state => state.user.isLoading
const getError = () => state => state.user.error
const getToken = () => state => state.user.token
const getUnregistered = () => state => state.user.unregistered

export default {getData, getIsLoading, getError, getToken, getUnregistered}