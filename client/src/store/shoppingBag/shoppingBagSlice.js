import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: JSON.parse(localStorage.getItem('shoppingBag')) || [],
}

const shoppingBagSlice = createSlice({
	name: 'shoppingBag',
	initialState,
	reducers: {
		// addToShoppingBag(state, action) {
		// 	state.data = action.payload
		// },
		// removeFromShoppingBag(state, action) {
		// 	state.data = action.payload
		// },
		setData(state,action)
		{
			state.data = action.payload
			localStorage.setItem('shoppingBag', JSON.stringify(action.payload))
		}
	},
})

export const {actions} = shoppingBagSlice

export default shoppingBagSlice.reducer