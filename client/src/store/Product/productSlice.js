import { createSlice } from '@reduxjs/toolkit'
import productOperations from './operations'
const {
	fetchProductUrl,
	fetchAllColors,
	fetchSizes,
	fetchAllVariants } = productOperations
const productSlice = createSlice({
	name: 'Product',
	initialState: {
		activeProduct: null,
		parent: null,
		variants: null,
		activeColor: null,
		allColors: null,
		allSizes: null,
		isLoading: false,
		hasError: false
	},
	reducers: {
		clearSizes(state) {
			state.allSizes = null
<<<<<<< HEAD
=======
		},
		clearActiveProduct(state){
			state.activeProduct = null
			state.parent = null,
			state.variants= null,
			state.activeColor= null,
			state.allColors= null,
			state.allSizes= null
>>>>>>> develop
		}
	},
	extraReducers: {
		[fetchProductUrl.fulfilled]: (state, action) => {
			state.activeProduct = action.payload.variants
			state.parent = action.payload
			state.activeColor = action.payload?.variants?.color
			state.isLoading = false
		},
		[fetchProductUrl.pending]: (state) => {
			state.isLoading = true
		},
		[fetchProductUrl.rejected]: (state) => {
<<<<<<< HEAD
=======
			state.isLoading = false
>>>>>>> develop
			state.hasError = true
		},
		[fetchAllColors.fulfilled]: (state, action) => {
			state.allColors = action.payload
			state.isLoading = false
		},
		[fetchAllColors.pending]: (state) => {
<<<<<<< HEAD
			state.isLoading = true
		},
		[fetchAllColors.rejected]: (state) => {
=======
			state.isLoading = false
		},
		[fetchAllColors.rejected]: (state) => {
			state.isLoading = false
>>>>>>> develop
			state.hasError = true
		},
		[fetchSizes.fulfilled]: (state, action) => {
			state.allSizes = action.payload
			state.isLoading = false
		},
		[fetchSizes.pending]: (state) => {
<<<<<<< HEAD
			state.isLoading = true
		},
		[fetchSizes.rejected]: (state) => {
=======
			state.isLoading = false
		},
		[fetchSizes.rejected]: (state) => {
			state.isLoading = false
>>>>>>> develop
			state.hasError = true
		},
		[fetchAllVariants.fulfilled]: (state, action) => {
			state.variants = action.payload
			state.isLoading = false
		},
		[fetchAllVariants.pending]: (state) => {
<<<<<<< HEAD
			state.isLoading = true
		},
		[fetchAllVariants.rejected]: (state) => {
=======
			state.isLoading = false
		},
		[fetchAllVariants.rejected]: (state) => {
			state.isLoading = false
>>>>>>> develop
			state.hasError = true
		},
	}
})

<<<<<<< HEAD
export const { clearSizes } = productSlice.actions
=======
export const { clearSizes, clearActiveProduct } = productSlice.actions
>>>>>>> develop
export default productSlice.reducer