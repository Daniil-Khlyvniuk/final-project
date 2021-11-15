import { createSlice } from '@reduxjs/toolkit'
import activeProductOperations from './operations'

// eslint-disable-next-line max-len
const {fetchActiveProduct , fetchColors , fetchSizes, fetchNewActiveProduct,fetchallSizesNew} = activeProductOperations

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
		sizes:[],
		variants:[],
		order: null,
		v: null
	},
	reducers:{
		setActiveColor(state,action){
			state.activeColor=action.payload
		},
		setActiveSize(state,action){
			state.sizes = action.payload
		}
		,
		setParent(state,action){
			state.parent = action.payload
		},
		setActiveVariant(state,action){
			state.order = action.payload
		},
		setV (state, action){
			state.v = action.payload
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
			state.variants = action.payload
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
		},
		[fetchallSizesNew.fulfilled]:(state,action) => {
			state.sizes = action.payload
		}
	}
})

// eslint-disable-next-line max-len
export const {setActiveColor, setParent ,setActiveSize,setActiveVariant , setV} = activeProductSlice.actions
export default activeProductSlice.reducer