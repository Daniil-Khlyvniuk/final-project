import { createSlice } from '@reduxjs/toolkit'
import productOperations from './operations'
// eslint-disable-next-line max-len
const {fetchProductUrl,fetchAllColors,fetchSizes,fetchAllVariants} = productOperations
const productSlice = createSlice({
	name: 'Product',
	initialState:{
		activeProduct :null,
		parent : null,
		variants: null,
		activeColor:null,
		allColors: null,
		allSizes : null,
		isLoading: false,
		hasError: false
	},
	reducers:{
		clearSizes(state){
			// state.activeProduct = null
			state.allSizes= null
		}
	},
	extraReducers:{
		[fetchProductUrl.fulfilled]:(state, action) => {
			state.activeProduct = action.payload.variants
			state.parent = action.payload
			state.activeColor = action.payload?.variants?.color
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
		[fetchAllVariants.fulfilled]:(state,action)=>{
			state.variants = action.payload
			state.isLoading = false
		},
		[fetchAllVariants.pending]:(state)=>{
			state.isLoading = true
		},
		[fetchAllVariants.rejected]:(state)=>{
			state.hasError = true
		},
	}
})
export const { clearSizes} = productSlice.actions
export default productSlice.reducer