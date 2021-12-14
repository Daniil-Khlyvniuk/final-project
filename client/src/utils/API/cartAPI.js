import axios from 'axios'

const getAuthHeader = () => ({
	header: localStorage.getItem('userToken')
})

const addProductToCart = (productId) => {
	return axios
		.put(`/api/cart/${productId}`, {}, getAuthHeader())
		.then(res => res?.data)
		.catch(() => null)
}

const deleteProductFromCart = (productId) => {
	return axios
		.delete(`/api/cart/product/${productId}`, getAuthHeader())
		.then(res => res?.data)
		.catch(() => null)
}

const getCart = () => {
	return axios
		.get('/api/cart', getAuthHeader())
		.then(res => res?.data)
		.catch(() => null)
}

const 	deleteCart = (productId) => {
	return axios
		.delete(`/api/cart/${productId}`, getAuthHeader())
		.then(res => res?.data)
		.catch(() => null)
}

const clearCart = () => {
	return axios
		.delete('/api/cart', getAuthHeader())
		.then(res => res?.data)
		.catch(() => null)
}

const addOrder = (test) => {
	axios
		.post('/api/orders', test, getAuthHeader())
		.then(res => res?.data)
		.catch(() => null)
}

export default {
	addProductToCart,
	deleteProductFromCart,
	getCart,
	deleteCart,
	clearCart,
	addOrder,
}
