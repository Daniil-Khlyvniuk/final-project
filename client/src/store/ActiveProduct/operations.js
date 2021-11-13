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
	'products/fetchColors',
	async (productId) => {
		const response = await productsAPI.getSizes(productId)
		return response.data
	}
)

export default {fetchActiveProduct, fetchColors, fetchSizes}