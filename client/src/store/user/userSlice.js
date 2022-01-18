import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUserByToken, getUserOrders } from '../../utils/API/userAPI'
import { snackActions } from '../../utils/customHooks/useSnackBarUtils'


const initialState = {
	token: localStorage.getItem('userToken') || null,
	data: null,
	error: null,
	isLoading: false,
	order: null,
	orders: JSON?.parse(localStorage.getItem('ORDER') || '[]') || [],
}

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async () => {
		const response = await getUserByToken()
		return response
	}
)


export const fetchUserOrders = createAsyncThunk(
	'user/fetchUserOrders',
	() => (
		getUserOrders().then(res => {
			console.log(res.data)
			return res.data
		})
	))

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

		clearOrder(state) {
			state.orders = null
		},

		setNewData(state, action) {
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

		setOrder(state, action) {
			state.order = action.payload
		}
	},
	extraReducers: {
		[fetchUser.fulfilled]: (state, action) => {
			delete (action.payload.password)
			state.data = action.payload.data
			state.isLoading = false
			state.error = null
		},
		[fetchUser.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchUser.rejected]: (state) => {
			snackActions.error('Trouble with auth, relogin please')
			localStorage.removeItem('userToken')
			state.isLoading = false
			state.token = null
			state.error = 'Error happened while user data loading. Relogin plz'
		},
		[fetchUserOrders.fulfilled]: (state, action) => {
			console.log(action.payload)
			state.orders = action.payload
			state.isLoading = false
			state.error = null
		},
		[fetchUserOrders.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[fetchUserOrders.rejected]: (state) => {
			state.isLoading = false
			state.error = 'Error happened while user data loading. Relogin plz'
		}
	}
})

export const { actions } = userSlice

export default userSlice.reducer