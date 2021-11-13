import { createSlice } from '@reduxjs/toolkit'
import productsOperations from './operations'
// import axios from 'axios'

const { fetchProducts } = productsOperations

const initialState = {
	data: [],
	relatedArray: (localStorage.getItem('related') && JSON.parse(localStorage.getItem('related'))) || [],
	relatedProductsList: [],
	isLoading: true,
	error: null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setAllProducts (state, action) {
			state.data = action.payload
		},
		addRelatedId (state, action) {
			const item = action.payload
			if (!state.relatedArray.find((id) => item === id)) {
				state.relatedArray.push(item)
			} else {
				const newArr = state.relatedArray.filter((id) => id !== item)
				newArr.push(item)
				state.relatedArray = newArr
			}

			//это надо будет проверить, когда будет много товаров
			if (state.relatedArray.length > 10) {
				state.relatedArray =
          state.relatedArray.slice(1, 11)
			}
			localStorage.setItem('related', JSON.stringify(state.relatedArray))
		},
		setRelatedProductsList (state, action) {
			state.relatedProductsList = action.payload
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

export const {
	setAllProducts,
	addRelatedId,
	setRelatedProductsList,
} = productsSlice.actions

export default productsSlice.reducer


