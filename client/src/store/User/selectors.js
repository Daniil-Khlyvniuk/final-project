const getData = () => state => state.user.data
const getIsLoading = () => state => state.user.isLoading
const getError = () => state => state.user.error
const getToken = () => state => state.user.token
const getOrder = () => state => state.user.unregistered
const getUserOrders = () => state => state.user.orders

export default {getData,
	getIsLoading,
	getError,
	getToken,
	getOrder,
	getUserOrders}

