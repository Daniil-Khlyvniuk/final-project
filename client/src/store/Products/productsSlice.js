import { createSlice } from '@reduxjs/toolkit'
import productsOperations from './operations'

const {fetchProducts} = productsOperations

const initialState = {
	data: [],
	isLoading: true,
	error: null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setAllProducts(state, action) {
			state.data = action.payload
		}
	},
	extraReducers: {
		[fetchProducts.fulfilled]: (state, action) => {
			state.data = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchProducts.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchProducts.rejected]: (state) => {
			state.isLoading = true
			state.error = 'Error happened while products loading'
		},
	},
})

export const { actions } = productsSlice

export default productsSlice.reducer