import { createSlice } from '@reduxjs/toolkit'
import activeProductOperations from './operations'

// eslint-disable-next-line max-len
const {fetchActiveProduct , fetchColors , fetchSizes, fetchNewActiveProduct} = activeProductOperations

const activeProductSlice = createSlice({
	name : 'Active Product',
	initialState:{
		currentVariant : {
			data : null,
			error: null,
			isLoading : true
		},
		parent: null ,
		activeColor: null,
		colors : [],
		sizes:[]
	},
	reducers:{
		setActiveColor(state,action){
			state.activeColor=action.payload
		},
		setParent(state,action){
			state.parent = action.payload
		}
	},
	extraReducers: {
		[fetchActiveProduct.fulfilled]: (state, action) => {
			state.currentVariant.data = action.payload
			state.parent = action.payload.product
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
		[fetchNewActiveProduct.fulfilled]: (state, action) => {
			state.sizes = action.payload
			state.currentVariant.error = null
			state.currentVariant.isLoading = false
		},
		[fetchNewActiveProduct.pending]: (state) => {
			state.currentVariant.isLoading = true
			state.currentVariant.error = null
		},
		[fetchNewActiveProduct.rejected]: (state) => {
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

export const {setActiveColor, setParent} = activeProductSlice.actions
export default activeProductSlice.reducer