import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	popular : []
}

const popularSlice = createSlice({
	name: 'popular',
	initialState,
	reducer: {
		getPopularData(state,action){
			state.popular = action.payload
		}
	}
})

export default popularSlice.reducer
export const {getPopularData} = popularSlice.actions