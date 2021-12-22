import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: JSON.parse(localStorage.getItem('favorites')) || [],
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
			state.data.includes(action.payload)
				? state.data = state.data.filter(product => product !== action.payload)
				: state.data.push(action.payload)
			localStorage.setItem('favorites', JSON.stringify(state.data))
		},
	},
})

export const {
	setFavorites,
	setLoading,
	handleOneFavorite
} = favoritesSlice.actions
export default favoritesSlice.reducer