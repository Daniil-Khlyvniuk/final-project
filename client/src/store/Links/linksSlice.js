import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import linksApi from '../../utils/API/linksApi'

export const fetchLinks = createAsyncThunk(
	'links/fetchLinks',
	async (_, { rejectWithValue }) => {
		try {
			const response = await linksApi.getLinks()
			return response.data
		}
		catch (error) { 
			return rejectWithValue(error.message)
		}
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
		[fetchLinks.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { actions } = linksSlice

export default linksSlice.reducer