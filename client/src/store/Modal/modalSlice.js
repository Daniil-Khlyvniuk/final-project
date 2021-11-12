import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		modal: false,
	},
	reducers: {
		handleOpen(state, action) {
			state.modal = action.payload
		},
		handleClose(state, action) {
			state.modal = action.payload
		}
	},
})

export const { handleOpen, handleClose } = modalSlice.actions
export default modalSlice.reducer