import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: [],
		id: [],
		isLoading: false,
	},
	reducers: {
		setFavorites(state, action) {
			state.data = action.payload
		},
		setFavoritesIds(state, action) {
			state.id = action.payload
		},
		setLoading(state, action) {
			state.isLoading = action.payload
		},
		clearFavorites(state) {
			state.data = []
			state.id = []
		}
	},
})

export const {
	setFavorites,
	setFavoritesIds,
	setLoading,
	handleOneFavorite,
	clearFavorites
} = favoritesSlice.actions

export default favoritesSlice.reducer