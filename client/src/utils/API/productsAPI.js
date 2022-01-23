import axios from 'axios'

export const getAllProducts = (params = '') =>
	axios.get(`/api/products?${params}`).then(res => res.data)

export const getOneProduct = (productId) =>
	axios.get(`/api/products/${productId}`)

const getMinMaxPrice = () =>
	axios.get('/api/products/minMaxPrice')

const getSizesNew = (colorId, productId) =>
	axios.get(`/api/products/variant/color/${colorId}/${productId}`)

const getColors = (productId) =>
	axios.get(`/api/products/info/color/${productId}`)

const getSizes = (productId) =>
	axios.get(`/api/products/info/size/${productId}`)

const getNewVariant = (specification, specificationId, productId) =>
	axios.get(`/api/products/variant/
	${specification}/${specificationId}/${productId}`)

const getProductVariant = (productId, variantId) =>
	axios.get(`/api/products/${productId}/${variantId}`)

const addNewProduct = (product) =>
	axios.post('/api/products', product)

const updateProduct = (productId, updatedProduct) =>
	axios.put(`/api/products/${productId}`, updatedProduct)

const searchForProducts = (searchPhrases) =>
	axios.post('/api/products/search', searchPhrases)

const getFilteredProducts = (filterParams) =>
	axios.get(`/api/products/filter?${filterParams}`)

const getAllVariantsByProductId = (productId) => (
	axios.get(`/api/products/variant/${productId}`)
)




export default {
	getMinMaxPrice,
	getProductVariant,
	addNewProduct,
	updateProduct,
	searchForProducts,
	getFilteredProducts,
	getColors,
	getSizes,
	getNewVariant,
	getAllVariantsByProductId,
	getSizesNew
}