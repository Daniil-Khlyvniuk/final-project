import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: []
	},
	reducers: {
		addFavorites(state, action) {
			state.data = action.payload
		},
	},
})

export const { addFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer