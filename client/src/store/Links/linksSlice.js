import { createSlice } from '@reduxjs/toolkit'
import linksOperations from './operations'

const {fetchLinks} = linksOperations

const linksSlise = createSlice({
	name: 'links',
	initialState: {
		data: [],
		error: null,
		isLoading: true,
	},
	extraReducers: {
		[fetchLinks.fulfilled]: (state, action) => {
			state.data = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchLinks.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchLinks.rejected]: (state) => {
			state.isLoading = true
			state.error = 'Error happened while links loading'
		},
	},
})

// export const { increment, decrement, incrementByAmount } = linksSlise.actions
export default linksSlise.reducer