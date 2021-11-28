import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: {
		category: [],
		color: [],
		size: [],
		perPage: null,
		sort: null,
		startPage: 0,
		minPrice: 0,
		maxPrice: 0,
	},
	isLoading: true,
	isLaunchedByUser: false,
}


export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setIsLaunchedByUser: (state, action) => {
			state.isLaunchedByUser = action.payload
		},
		handleCategory: (state, action) => {
			const name = action.payload
			if(state.data.category.includes(name))
			{
				state.data.category = 
					state.data.category.filter(category => category !== name)
			}
			else
			{
				state.data.category.push(name)
			}
		},
		handleColor: (state, action) => {
			state.data.color = action.payload
		},
		handleSize: (state, action) => {
			const name = action.payload
			if(state.data.size.includes(name))
			{
				state.data.size = state.data.size.filter(size => size !== name)
			}
			else
			{
				state.data.size.push(name)
			}
		},
		handlePerPage: (state, action) => {
			state.data.perPage = action.payload
		},
		handleSort: (state, action) => {
			state.data.sort = action.payload
		},
		handleMinPrice: (state, action) => {
			state.data.minPrice = action.payload
		},
		handleMaxPrice: (state, action) => {
			state.data.maxPrice = action.payload
		},
		handleStartPage: (state, action) => {
			state.data.startPage = action.payload
		},
		//for filter update from query string ONLY
		setNewStore: (state, action) => {	
			state.data = {...state.data, ...action.payload}
			state.isLoading = false
		},
	},
})

export const { actions } = filterSlice

export default filterSlice.reducer