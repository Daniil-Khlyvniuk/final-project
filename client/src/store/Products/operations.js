
import { createAsyncThunk } from '@reduxjs/toolkit'
import productsApi from '../../utils/API/productsAPI'

const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await productsApi.getAllProducts()
		return  response.data
	}
)

export default {
	fetchProducts,
}