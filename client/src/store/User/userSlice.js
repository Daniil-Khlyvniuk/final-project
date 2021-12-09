import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUserByToken } from '../../utils/API/userAPI'

const initialState = {
	token: localStorage.getItem('userToken') || null,
	data: null,
	error: null,
	isLoading: false,
	unregistered: null,
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
		setNewData(state,action){
			state.data = action.payload
		},
		setToken(state, action) {
			const { token, rememberMe } = action.payload
			state.token = token
			if (rememberMe) {
				localStorage.setItem('userToken', token)
			}
		},
		logOut(state) {
			localStorage.removeItem('userToken')
			state.token = null
			state.data = null
			return state
		},
		setUnregistered(state,action) {
			state.unregistered = action.payload
		}
	},
	extraReducers: {
		[fetchUser.fulfilled]: (state, action) => {
			delete (action.payload.password)
			state.data = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchUser.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchUser.rejected]: (state) => {
			localStorage.removeItem('userToken')
			state.isLoading = false
			state.token = null
			state.error = 'Error happened while user data loading. Relogin plz'
		},
	}
})

export const { actions } = userSlice

export default userSlice.reducer