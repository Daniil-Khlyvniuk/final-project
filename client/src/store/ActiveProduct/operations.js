import { createAsyncThunk } from '@reduxjs/toolkit'
import productsAPI from '../../utils/API/productsAPI'

const fetchActiveProduct = createAsyncThunk(
	'products/getOneProduct',
	async (productId) => {
		const response = await productsAPI.getOneProduct(productId)
		return response.data
	}
)

export default {fetchActiveProduct}