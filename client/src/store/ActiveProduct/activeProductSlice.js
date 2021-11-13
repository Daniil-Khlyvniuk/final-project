import { createSlice } from '@reduxjs/toolkit'
import activeProductOperations from './operations'

const {fetchActiveProduct , fetchColors , fetchSizes} = activeProductOperations

const activeProductSlice = createSlice({
	name : 'Active Product',
	initialState:{
		currentVariant : {
			data : null,
			error: null,
			isLoading : true
		},
		colors : [],
		sizes:[]
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
		},
		[fetchColors.fulfilled]:(state, action) => {
			state.colors= action.payload
		},

		[fetchSizes.fulfilled]:(state,action) => {
			state.sizes = action.payload
		}
	}
})


export default activeProductSlice.reducer