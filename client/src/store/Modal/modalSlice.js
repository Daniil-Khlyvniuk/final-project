import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		modal: false,
	},
	reducers: {
		modalToggle(state, action) {
			state.modal = action.payload
		},
	},
})

export const { modalToggle } = modalSlice.actions
export default modalSlice.reducer