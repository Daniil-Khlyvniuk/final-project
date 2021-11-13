import {createAsyncThunk} from '@reduxjs/toolkit'
import productsApi from '../../utils/API/productsAPI'

const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (options) => {
		return await productsApi.getAllProducts(options)
	}
)

export default {
	fetchProducts,
}