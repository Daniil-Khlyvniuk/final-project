import { createAsyncThunk } from '@reduxjs/toolkit'
import productsAPI from '../../utils/API/productsAPI'

const fetchActiveProduct = createAsyncThunk(
	'products/getOneProduct',
	async (productId) => {
		const response = await productsAPI.getOneProduct(productId)
		return response.data
	}
)

const fetchColors = createAsyncThunk(
	'products/fetchColors',
	async (productId) => {
		const response = await productsAPI.getColors(productId)
		return response.data
	}
)

const fetchSizes= createAsyncThunk(
	'products/fetchSizes',
	async (productId) => {
		const response = await productsAPI.getSizes(productId)
		return response.data
	}
)

const fetchNewActiveProduct = createAsyncThunk(
	'products/fetchNewActiveProduct',
	async(params) =>{
		const {specification, specificationId, productId} = params
		// eslint-disable-next-line max-len
		const response = await productsAPI.getNewVariant(specification, specificationId, productId)
		return response.data

	}
)

// eslint-disable-next-line max-len
export default {fetchActiveProduct, fetchColors, fetchSizes, fetchNewActiveProduct}