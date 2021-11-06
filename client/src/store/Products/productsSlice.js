import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setAllProducts(state, action) {
			state.list = action.payload
		}
	}
})

export default productsSlice.reducer
export const { setAllProducts } = productsSlice.actions