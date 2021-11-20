import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	category: [],
	color: [],
	size: [],
	perPage: null,
	sort: null,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		handleCategory: (state, action) => {
			const name = action.payload
			if(state.category.includes(name))
			{
				state.category = state.category.filter(category => category !== name)
			}
			else
			{
				state.category.push(name)
			}
		},
		handleColor: (state, action) => {
			// const name = action.payload
			// if(state.color.includes(name))
			// {
			// 	state.color = state.color.filter(color => color !== name)
			// }
			// else
			// {
			// 	state.color.push(name)
			// }
			state.color = action.payload
		},
		handleSize: (state, action) => {
			const name = action.payload
			if(state.size.includes(name))
			{
				state.size = state.size.filter(size => size !== name)
			}
			else
			{
				state.size.push(name)
			}
		},
		
		//for filter update from query string ONLY
		setNewStore: (state, action) => {
			return state = {...action.payload}
		},

		setPerPage: (state, action) => {
			state.perPage = action.payload
		},
		setSort: (state, action) => {
			state.sort = action.payload
		}
	},
})

export const { actions } = filterSlice

export default filterSlice.reducer