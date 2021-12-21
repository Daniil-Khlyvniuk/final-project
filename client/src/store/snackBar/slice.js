import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	message: null,
	severity: 'info',
}

const slice = createSlice({
	name: 'snackBar',
	initialState,
	reducers:
	{
		snackToggle: (state, action) => {
			state.message = action.payload
		},
		snackSettings: (state, action) => {
			return {...state, ...action.payload}
		}
	}
})

export const {actions} = slice

export default slice.reducer