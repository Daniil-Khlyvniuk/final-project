import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../utils/API/categoriesApi'

const fetchCategories = createAsyncThunk(
	'category/fetchCategories',
	async () => {
		const response = await API.getCategories()
		// eslint-disable-next-line no-console
		console.log(response.data)

		return response.data
	}
)

export default { fetchCategories }