/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userOperations, userSelectors} from '../../store/User'
import { loginUser, registerUser } from '../API/userAPI'
import modalActions from '../../store/Modal'

const useAuth = () => {
	const dispatch = useDispatch()
	const token = useSelector(userSelectors.getToken())
	const checkToken = () => 
	{
		console.log('axios.defaults',axios.defaults)
		if (token) {
			axios.defaults.headers.common['Authorization'] = token
			dispatch(userOperations.fetchUser())
		} else {
			axios.defaults.headers.common['Authorization'] = null
			/*if setting null does not remove `Authorization` header then try     
					delete axios.defaults.headers.common['Authorization'];
				*/
		}
		return token
	}

	const login = async (values) => {
		console.log('login',values)
		const {rememberMe} = values
		delete (values.rememberMe)
		const res = await loginUser(values)
		if (res.status === 200) {
			//save token to store (and localStorage)
			dispatch(userOperations.setToken({token: res.data.token, rememberMe}))
			dispatch(modalActions.modalToggle(false))
			return true
		}
		return false
	}

	const register = async (values) => {
		console.log('register',values)
		const {email: loginOrEmail,password,rememberMe} = values
		delete (values.confirmPass)
		delete (values.rememberMe)

		const res = await registerUser(values)
		if (res.status === 200) {
			return await login({loginOrEmail,password,rememberMe})
		}
		return false
	}

	return {checkToken, login, register}
}

export default useAuth