import axios from 'axios'

const getAllProducts = () => axios.get('/products')

const getOneProduct = (productId) => axios.get(`/products/${productId}`)

const addNewProduct = (product) => axios.post('/products', product)
// product is an object with all the product's properties like name, quantity, brand etc.

// eslint-disable-next-line max-len
const updateProduct = (productId, updatedProduct) => axios.put(`/products/${productId}`, updatedProduct)
// updatedProduct si an object with parameters you want to edit:
// 																									{
// 																										price: 120,
// 																										quantity: 3,
// 																										brand: 'new brand'
// 																									}

const searchForProducts = (searchPhrases) => axios.post('/products/search', searchPhrases)
// SearchPhrases has to be an object with a "query" key and searchwords separated by spaces: 
// 																								{
//                                      						query: 'linen square beige'
//                                      					}

// eslint-disable-next-line max-len
const getFilteredProducts = (filterParams) => axios.get(`/products/filter${filterParams}`)
// please see documentaion for available and custom params

export default {
	getAllProducts,
	getOneProduct,
	addNewProduct,
	updateProduct,
	searchForProducts,
	getFilteredProducts
}