import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
	name: 'card', // it is TYPE from old redux
	initialState: 1,
	reducers: {
		test(state){
			// this is like a reducer with a built-in action creator

			// eslint-disable-next-line no-unused-vars
			return state = 45
		},
		test2(state, action){
			// aciton is optinal. When we need external data for updating the store
			return state = action.payload
		},
		/*
		the next action will be here like:
		
		newAction(state, action) {
			return state.push(action.payload)
		}
		*/
	}
})

export default cardSlice.reducer
export const {test, test2} = cardSlice.actions