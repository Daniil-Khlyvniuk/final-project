const getData = () => state => state.user.data
const getIsLoading = () => state => state.user.isLoading
const getError = () => state => state.user.error
const getToken = () => state => state.user.token

export default {getData, getIsLoading, getError, getToken}