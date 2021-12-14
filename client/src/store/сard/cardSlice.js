import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
	name: 'card',
	initialState: 1,
	reducers: {
		test(state){
			// eslint-disable-next-line no-unused-vars
			return state = 45
		},
		test2(state, action){
			return state = action.payload
		},
	}
})

export default cardSlice.reducer
export const {test, test2} = cardSlice.actions