import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: [],
		isLoading: true,
	},
	reducers: {
		setFavorites(state, action) {
			state.data = action.payload
		},
		setLoading(state, action) {
			state.isLoading = action.payload
		}
	},
})

export const { setFavorites, setLoading } = favoritesSlice.actions
export default favoritesSlice.reducer