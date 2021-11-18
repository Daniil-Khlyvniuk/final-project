import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	color: [],
	size: [],
	category: [],
	sort: ['-currentPrice']
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		handleColor: (state, action) => {
			const id = action.payload
			if(state.color.includes(id))
			{
				state.color = state.color.filter(color => color !== id)
			}
			else
			{
				state.color.push(id)
			}
		},
		handleSize: (state, action) => {
			const id = action.payload
			if(state.size.includes(id))
			{
				state.size = state.size.filter(size => size !== id)
			}
			else
			{
				state.size.push(id)
			}
		},
		handleCategory: (state, action) => {
			const id = action.payload
			if(state.category.includes(id))
			{
				state.category = state.category.filter(category => category !== id)
			}
			else
			{
				state.category.push(id)
			}
		},
 
		//пока под ???, как это правильно сделать
		setFiltersFromQueryString: (state, action) => {
			if(Object.keys(action.payload).length)
			{
				const fromQuery = {}
				for(let key in action.payload)
				{
					if(state[key])
					{
						fromQuery[key] = Array.isArray(action.payload[key]) 
							? [...action.payload[key]] 
							: [action.payload[key]]
					}
				}
				return state = {...fromQuery}
			}
			return state
		}
	},
})

export const { actions } = filterSlice

export default filterSlice.reducer