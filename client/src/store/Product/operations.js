import { createAsyncThunk } from '@reduxjs/toolkit'
import productsAPI from '../../utils/API/productsAPI'


const fetchProductUrl = createAsyncThunk(
	'product/getProduct',
	async (productId) => {

		const response = await productsAPI.getOneProduct(productId)

		return response.data
	}
)


const fetchAllColors = createAsyncThunk(
	'product/getAllColors',
	async (productId) => {
		const response = await productsAPI.getColors(productId)
		return response.data
	}
)

const fetchSizes = createAsyncThunk(
	'product/getSizes',
	async(params)=>{
		const {colorId , productId} = params
		const response = await productsAPI.getSizesNew(colorId, productId)
		return response.data
	}
)
const fetchAllVariants = createAsyncThunk(
	'product/getAllVariants',
	async(variants)=>{
		// eslint-disable-next-line max-len
		const response = await productsAPI.getAllVariantsByProductId(variants)
		return response.data
		// const response = await variants.map(variant => productsAPI.getOneProduct(variant))
		// const responses = await Promise.all(response)
		// const data = responses.map(i => i.data)
		// return data

	}
)

export default {fetchProductUrl,fetchAllColors,fetchSizes,fetchAllVariants}
