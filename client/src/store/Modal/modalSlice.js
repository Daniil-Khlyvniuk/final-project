import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		open: false,
	},
	reducers: {
		handleOpen(state, action) {
			state.open = action.payload
		},
		handleClose(state, action) {
			state.open = action.payload
		}
	},
})

export const { handleOpen, handleClose } = modalSlice.actions
export default modalSlice.reducer