import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userOperations, userSelectors} from '../../store/User'
import { loginUser, registerUser } from '../API/userAPI'
import modalActions from '../../store/Modal'
import {subscribeTemlate} from '../emailTemplates'

const useAuth = () => {
	const dispatch = useDispatch()
	const token = useSelector(userSelectors.getToken())
	const checkToken = () => 
	{
		// eslint-disable-next-line no-console
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
		let formData = {...values}
		const {rememberMe} = formData
		delete (formData.rememberMe)
		const res = await loginUser(formData)
		if (res.status === 200) {
			//save token to store (and localStorage)
			dispatch(userOperations.setToken({token: res.data.token, rememberMe}))
			dispatch(modalActions.modalToggle(false))
			return true
		}
		return false
	}

	const register = async (values) => {
		let formData = {
			...values,
			letterSubject: 'Your subscription promo code',
			letterHtml: subscribeTemlate(values.email),
		}
		const {email: loginOrEmail,password,rememberMe} = formData
		delete (formData.confirmPass)
		delete (formData.rememberMe)
		
		const res = await registerUser(formData)
		if (res.status === 200) {
			const loginRes = await login({loginOrEmail,password,rememberMe})
			return loginRes
		}
		return false
	}
	return {checkToken, login, register}
}

export default useAuth