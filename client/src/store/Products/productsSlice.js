import { createSlice } from '@reduxjs/toolkit'
import productsOperations from './operations'

const {fetchProducts} = productsOperations

const initialState = {
	data: [],
	relatedArray: (localStorage.getItem('related') && JSON.parse(localStorage.getItem('related'))) || [111,222,333,444],
	relatedProductsList: [],
	isLoading: true,
	error: null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setAllProducts(state, action) {
			state.data = action.payload
		},
		addRelatedId(state, action)
		{
			const item = action.payload
			// eslint-disable-next-line no-console
			console.log(item)
			if (!state.relatedArray.find((id) => item === id)) {
				// const newCard = slideData.filter((item) => item.id === id)
				// const [{...addToRelated}] = newCard
				state.relatedArray.push(item)
			}else{
				state.relatedArray.filter((id)=> id === item).push(item)
			}
			localStorage.setItem('related', JSON.stringify(state.relatedArray))
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