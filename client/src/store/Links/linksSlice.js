import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import linksApi from '../../utils/API/linksApi'

export const fetchLinks = createAsyncThunk(
	'links/fetchLinks',
	async () => {
		const response = await linksApi.getLinks()
		return response.data
	}
)

const linksSlice = createSlice({
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

export const { actions } = linksSlice

export default linksSlice.reducer