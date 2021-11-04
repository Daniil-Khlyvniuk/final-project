import axios from 'axios'

const addProductToCart = (productId) => axios.put(`/cart/${productId}`)

const deleteProductFromCart = (productId) => axios.delete(`/cart/${productId}`)

const getCart = () => axios.get('/cart')

const deleteCart = () => axios.delete('/cart')

export default {
	addProductToCart,
	deleteProductFromCart,
	getCart,
	deleteCart
}