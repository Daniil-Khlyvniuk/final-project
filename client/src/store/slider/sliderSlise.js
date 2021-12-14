import { createSlice } from '@reduxjs/toolkit'
import slidesOperations from './operations'

const {fetchSliders} = slidesOperations

const initialState = {
	data: [],
	isLoading: true,
	error: null,
}

const sliderSlice = createSlice({
	name: 'slides',
	initialState,
	reducers:{},
	extraReducers:{
		[fetchSliders.fulfilled]:(state, action)=>{
			state.data = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchSliders.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchSliders.rejected]: (state) => {
			state.isLoading = true
			state.error = 'Error happened while slides loading'
		},
	}
})

export const { actions } = sliderSlice

export default sliderSlice.reducer