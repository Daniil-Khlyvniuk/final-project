import { createSlice } from '@reduxjs/toolkit'

const activeProductSlice = createSlice({
	name : 'activeProduct',
	initialState : {},
	reducers:{
		setActiveProduct(state,action){
			state = {...action.payload , amount : 1}

		},
		clearActiveProduct(state){
			// eslint-disable-next-line no-unused-vars
			state = {}
		}
	}
})

export const {actions} = activeProductSlice

export default activeProductSlice.reducer