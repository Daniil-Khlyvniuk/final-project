import { createSlice } from '@reduxjs/toolkit'
import productOperations from './operations'

const {fetchProductUrl,fetchAllColors,fetchSizes} = productOperations
const productSlice = createSlice({
	name: 'Product',
	initialState:{
		activeProduct :null,
		parent : null,
		variants: null,
		allColors: null,
		allSizes : null,
		isLoading: false,
		hasError: false
	},
	reducers:{
		getAllVariants(state, action){
			state.variants = action.payload
		}
	},
	extraReducers:{
		[fetchProductUrl.fulfilled]:(state, action) => {
			state.activeProduct = action.payload
			state.parent = action.payload.product
			state.isLoading = false
		},
		[fetchProductUrl.pending]:(state) => {
			state.isLoading = true
		},
		[fetchProductUrl.rejected]:(state) =>{
			state.hasError = true
		},
		[fetchAllColors.fulfilled]:(state,action)=>{
			state.allColors = action.payload
			state.isLoading = false
		},
		[fetchAllColors.pending]:(state)=>{
			state.isLoading = true
		},
		[fetchAllColors.rejected]:(state)=>{
			state.hasError = true
		},
		[fetchSizes.fulfilled]:(state,action)=>{
			state.allSizes = action.payload
			state.isLoading = false
		},
		[fetchSizes.pending]:(state)=>{
			state.isLoading = true
		},
		[fetchSizes.rejected]:(state)=>{
			state.hasError = true
		},
	}
})
export const {getAllVariants} = productSlice.actions
export default productSlice.reducer