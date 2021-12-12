import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { getUserByToken } from '../../utils/API/userAPI'
=======
import { getUserByToken , getUserOrders } from '../../utils/API/userAPI'
>>>>>>> develop

const initialState = {
	token: localStorage.getItem('userToken') || null,
	data: null,
	error: null,
	isLoading: false,
<<<<<<< HEAD
=======
	unregistered: null,
	orders : null,
>>>>>>> develop
}

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async () => {
		const response = await getUserByToken()
		return response.data
	}
)

<<<<<<< HEAD
=======
export const fetchUserOrders = createAsyncThunk(
	'user/fetchUserOrders',
	async () =>{
		const response = await getUserOrders()
		return response.data
	}
)

>>>>>>> develop
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
<<<<<<< HEAD
=======
		setUnregistered(state,action) {
			state.unregistered = action.payload
		}
>>>>>>> develop
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
<<<<<<< HEAD
			state.isLoading = true
			state.token = null
			state.error = 'Error happened while links loading'
		},
=======
			localStorage.removeItem('userToken')
			state.isLoading = false
			state.token = null
			state.error = 'Error happened while user data loading. Relogin plz'
		},
		[fetchUserOrders.fulfilled]:(state,action) => {
			state.orders = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchUserOrders.pending]:(state)=>{
			state.isLoading =true
			state.error = null
		},
		[fetchUserOrders.rejected]:(state)=>{
			state.isLoading = false
			state.error = 'Error happened while user data loading. Relogin plz'
		}
>>>>>>> develop
	}
})

export const { actions } = userSlice

export default userSlice.reducer