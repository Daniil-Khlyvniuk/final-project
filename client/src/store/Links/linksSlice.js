import { createSlice } from '@reduxjs/toolkit'
// import { getLinks } from '../../utils/API/linksApi'
import linksOperations from './operations'

// const fetchLinks = createAsyncThunk(
// 	'users/fetchByIdStatus',
// 	async () => {
// 		const response = await getLinks()
// 		return response.data
// 	}
// )

const {fetchLinks} = linksOperations

const linksSlise = createSlice({
	name: 'links',
	initialState: {
		data: [],
		error: null,
		isLoading: true,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchLinks.fulfilled, (state, action) => {
			state.data = action.payload
			state.isLoading = false
			state.error = null
		})
		builder.addCase(fetchLinks.pending, (state) => {
			state.isLoading = true
			state.error = null
		})
		builder.addCase(fetchLinks.rejected, (state) => {
			state.isLoading = true
			state.error = 'Error happened while links loading'
		})
	},
})

// export const { increment, decrement, incrementByAmount } = linksSlise.actions
export default linksSlise.reducer