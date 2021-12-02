import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getUserByToken} from '../../utils/API/userAPI'


const initialState = {
	token: localStorage.getItem('userToken') || null,
	data: null,
	error: null,
	isLoading: false,
}



export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async () => {
		const response = await getUserByToken()
		return response.data
	}
)


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken(state, action)
		{
			const {token, rememberMe} = action.payload
			state.token = token
			if(rememberMe)
			{
				localStorage.setItem('userToken',token)
			}
		},
		logOut(state)
		{
			localStorage.removeItem('userToken')
			state = initialState
			return state
		},
	},
	extraReducers: {
		[fetchUser.fulfilled]: (state, action) => {
			delete(action.payload.password)
			state.data = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchUser.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchUser.rejected]: (state) => {
			state.isLoading = true
			state.token = null
			state.error = 'Error happened while links loading'
		},
	}
})

export const { actions } = userSlice

export default userSlice.reducer