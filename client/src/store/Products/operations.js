import {createAsyncThunk} from '@reduxjs/toolkit'
import productsApi from '../../utils/API/productsAPI'

const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (options) => {
		return await productsApi.getAllProducts(options)
	}
)

//only for filter
const fetchProductsByFilter = createAsyncThunk(
	'products/fetchProductsByFilter',
	async (filterParams) => {
		const res = await productsApi.getFilteredProducts(filterParams)
		return res.data
	}
)

export default {
	fetchProducts,
	fetchProductsByFilter,
}