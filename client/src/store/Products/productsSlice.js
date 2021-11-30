import { createSlice } from '@reduxjs/toolkit'
import productsOperations from './operations'

const {
	fetchProducts,
	fetchProductsByFilter,
	fetchProductsByNextPage
} = productsOperations

const initialState = {
	data: [],
	catalog: [],
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
			state.isLoading = false
			state.error = 'Error happened while products loading'
		},

		//for catalog page filters
		[fetchProductsByFilter.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-console
			console.log('productsByFilter',action.payload)

			// state.catalog = [...state.catalog, ...action.payload]
			state.catalog = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchProductsByFilter.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchProductsByFilter.rejected]: (state) => {
			state.isLoading = false
			state.error = 'Error happened while products by filter loading'
		},

		//for catalog next page same filters
		[fetchProductsByNextPage.fulfilled]: (state, action) => {
			// eslint-disable-next-line no-console
			console.log('productsNextByFilter',action.payload)
	
			state.catalog = [...state.catalog, ...action.payload]
			state.isLoading = false
			state.error = null
		},
		[fetchProductsByNextPage.pending]: (state) => {
			// state.isLoading = true
			state.error = null
		},
		[fetchProductsByNextPage.rejected]: (state) => {
			state.isLoading = false
			state.error = 'Error happened while products next page by filter loading'
		},
	},
})

export const {
	setAllProducts,
	addRelatedId,
	setRelatedProductsList,
} = productsSlice.actions

export default productsSlice.reducer