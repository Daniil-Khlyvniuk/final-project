import { createAsyncThunk } from '@reduxjs/toolkit'
import categoriesApi from '../../utils/API/categoriesApi'

const fetchCategories = createAsyncThunk(
	'category/fetchCategories',
	async () => {
		const response = await categoriesApi.getCategories()
		return response.data
	}
)

export default { fetchCategories }