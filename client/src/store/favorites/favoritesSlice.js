import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: [],
		id: JSON.parse(localStorage.getItem('favorites')) || [],
		isLoading: false,
	},
	reducers: {
		setFavorites(state, action) {
			state.data = action.payload
		},
		setLoading(state, action) {
			state.isLoading = action.payload
		},
		handleOneFavorite(state, action) {
			state.id.includes(action.payload)
				? state.id = state.id.filter(product => product !== action.payload)
				: state.id.push(action.payload)
			localStorage.setItem('favorites', JSON.stringify(state.id))
		},
		clearFavorites(state) {
			localStorage.removeItem('favorites')
			state.data = []
			state.id = []
		}
	},
})

export const {
	setFavorites,
	setLoading,
	handleOneFavorite,
	clearFavorites
} = favoritesSlice.actions

export default favoritesSlice.reducer