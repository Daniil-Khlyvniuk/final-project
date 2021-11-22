import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: {
		category: [],
		color: [],
		size: [],
		perPage: null,
		sort: null,
		startPage: 1,
	},
	isLoading: true,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
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
		
		//for filter update from query string ONLY
		setNewStore: (state, action) => {	
			state.data = {...state.data, ...action.payload}
			// state.isLoading = false
		},

		setPerPage: (state, action) => {
			state.data.perPage = action.payload
		},
		setSort: (state, action) => {
			state.data.sort = action.payload
		}
	},
})

export const { actions } = filterSlice

export default filterSlice.reducer