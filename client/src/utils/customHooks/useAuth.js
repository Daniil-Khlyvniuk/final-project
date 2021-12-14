import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userOperations, userSelectors} from '../../store/user'
import { loginUser, registerUser } from '../API/userAPI'
import {subscribeTemlate} from '../emailTemplates'
import modalActions from '../../store/modal'
import useSnack from './useSnack'

const useAuth = () => {
	const dispatch = useDispatch()
	const {handleSnack} = useSnack()
	const token = useSelector(userSelectors.getToken())
	const checkToken = () => 
	{
		if (token) {
			axios.defaults.headers.Authorization = token
			dispatch(userOperations.fetchUser())
			dispatch(userOperations.fetchUserOrders())
		} else {
			axios.defaults.headers.Authorization = null
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
			handleSnack({message: 'You successfully Logged In', style: 'success'})
			return true
		}
		handleSnack({message: 'wrong login or password', style: 'warning'})
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
			handleSnack({message: 'You successfully registered', style: 'success'})
			return loginRes
		}
		handleSnack({message: 'Troubles with register', style: 'warning'})
		return false
	}
	return {checkToken, login, register}
}

export default useAuth