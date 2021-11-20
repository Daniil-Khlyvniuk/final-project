import axios from 'axios'

const getProduct = (id) => axios(`/api/products/${id}`)

export default {
	getProduct,
}