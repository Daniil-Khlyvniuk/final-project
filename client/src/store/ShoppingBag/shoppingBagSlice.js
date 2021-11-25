import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
}

const shoppingBagSlice = createSlice({
	name: 'shoppingBag',
	initialState,
	reducers: {
		addToShoppingBag(state, action) {
			state.data = action.payload
		},
		removeFromShoppingBag(state, action) {
			state.data = action.payload
		}
	},
})

export const {
	addToShoppingBag,
	removeFromShoppingBag
} = shoppingBagSlice.actions

export default shoppingBagSlice.reducer
