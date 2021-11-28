import {createAsyncThunk} from '@reduxjs/toolkit'
import queryString from 'query-string'
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
	async (_, {getState,rejectWithValue}) => {
		try
		{
			const filters = getState().filter.data
			const newQueryString = 
				queryString.stringify(filters,{
					arrayFormat: 'comma',
					skipNull: true,
					skipEmptyString: true,
					parseNumbers: true
				})
			const res = await productsApi.getFilteredProducts(newQueryString)
			return res.data
		}
		catch(error)
		{
			return rejectWithValue(error.message)
		}
	}
)

const fetchProductsByNextPage = createAsyncThunk(
	'products/fetchProductsByNextPage',
	async (_, {getState,rejectWithValue}) => {
		try
		{
			const filters = getState().filter.data
			const newQueryString = 
				queryString.stringify(filters,{
					arrayFormat: 'comma',
					skipNull: true,
					skipEmptyString: true,
					parseNumbers: true
				})
			const res = await productsApi.getFilteredProducts(newQueryString)
			return res.data
		}
		catch(error)
		{
			return rejectWithValue(error.message)
		}
	}
)

export default {
	fetchProducts,
	fetchProductsByFilter,
	fetchProductsByNextPage,
}