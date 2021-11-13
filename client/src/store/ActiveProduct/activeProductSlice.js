import { createSlice } from '@reduxjs/toolkit'
import activeProductOperations from './operations'

const {fetchActiveProduct} = activeProductOperations

const activeProductSlice = createSlice({
	name : 'Active Product',
	initialState:{
		currentVariant : {
			data : {},
			error: null,
			isLoading : true
		}
	},
	extraReducers: {
		[fetchActiveProduct.fulfilled]: (state, action) => {
			state.currentVariant.data = action.payload
			state.currentVariant.error = null
			state.currentVariant.isLoading = false
		},
		[fetchActiveProduct.pending]: (state) => {
			state.currentVariant.isLoading = true
			state.currentVariant.error = null
		},
		[fetchActiveProduct.rejected]: (state) => {
			state.currentVariant.isLoading = true
			state.currentVariant.error = 'Error'
		}
	}
})


export default activeProductSlice.reducer