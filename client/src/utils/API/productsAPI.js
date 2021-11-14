import axios from 'axios'

const getAllProducts = (options) => axios.get(`/api/products${options ? `?${options}` : ''}`).then(res => res.data).catch(() => null)

const getOneProduct = (productId) => axios.get(`/api/products/${productId}`)


// eslint-disable-next-line max-len
const getColors = (productId) => axios.get(`/api/products/info/color/${productId}`)
// eslint-disable-next-line max-len
const getSizes = (productId) => axios.get(`/api/products/info/size/${productId}`)
// eslint-disable-next-line max-len
const getNewVariant =(specification, specificationId , productId)=> axios.get(`/api/products/variant/${specification}/${specificationId}/${productId}`)

// eslint-disable-next-line max-len
const getProductVariant = (productId , variantId) => axios.get(`/api/products/${productId}/${variantId}`)

const addNewProduct = (product) => axios.post('/api/products', product)
// product is an object with all the product's properties like name, quantity, brand etc.

// eslint-disable-next-line max-len
const updateProduct = (productId, updatedProduct) => axios.put(`/api/products/${productId}`, updatedProduct)
// updatedProduct si an object with parameters you want to edit:
// 																									{
// 																										price: 120,
// 																										quantity: 3,
// 																										brand: 'new brand'
// 																									}

const searchForProducts = (searchPhrases) => axios.post('/api/products/search', searchPhrases)
// SearchPhrases has to be an object with a "query" key and searchwords separated by spaces: 
// 																								{
//                                      						query: 'linen square beige'
//                                      					}

const searchAutocomplete = (searchPhrases) => axios.post('/api/products/autocomplete', searchPhrases)
// SearchPhrases has to be an object with a "query" key and searchwords separated by spaces:
// 																								{
//                                      						query: 'linen square beige'
//

// eslint-disable-next-line max-len
const getFilteredProducts = (filterParams) => axios.get(`/api/products/filter${filterParams}`)
// please see documentaion for available and custom params

export default {
	getAllProducts,
	getOneProduct,
	getProductVariant,
	addNewProduct,
	updateProduct,
	searchForProducts,
	getFilteredProducts,
	getColors,
	getSizes,
	getNewVariant,
	searchAutocomplete,


}