import {useCallback} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userOperations, userSelectors } from '../../store/user'
import { loginUser, registerUser } from '../API/userAPI'
import { subscribeTemlate } from '../emailTemplates'
import modalActions from '../../store/modal'
import {snackActions} from './useSnackBarUtils'
import { useLocation } from 'react-router-dom'
import favoritesActions from '../../store/favorites'

const useAuth = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const token = useSelector(userSelectors.getToken())
	const checkToken = useCallback(() => {
		if (token) {
			axios.defaults.headers.Authorization = token
			dispatch(userOperations.fetchUser())
		} else {
			axios.defaults.headers.Authorization = null
			/*if setting null does not remove `Authorization` header then try     
					delete axios.defaults.headers.common['Authorization'];
				*/
		}
		return token
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[token])

	const login = async (values) => {
		let formData = { ...values }
		const { rememberMe } = formData
		delete (formData.rememberMe)
		const res = await loginUser(formData)
		if (res.status === 200) {
			//save token to store (and localStorage)
			dispatch(userOperations.setToken({ token: res.data.token, rememberMe }))
			dispatch(modalActions.modalToggle(false))
			snackActions.success('You successfully Logged In')
			if (location.state?.productToFavorite) {
				dispatch(favoritesActions.handleOneFavorite(
					location.state.productToFavorite
				))
				location.state.productToFavorite = null
			}
			return true
		}
		snackActions.warning('Wrong login or password')
		return false
	}

	const register = async (values) => {
		let formData = {
			...values,
			letterSubject: 'Your subscription promo code',
			letterHtml: subscribeTemlate(values.email),
		}
		const { email: loginOrEmail, password, rememberMe } = formData
		delete (formData.confirmPass)
		delete (formData.rememberMe)

		const res = await registerUser(formData)
		if (res.status === 200) {
			const loginRes = await login({ loginOrEmail, password, rememberMe })
			snackActions.success('You successfully registered')
			return loginRes
		}
		snackActions.warning('Troubles with register')
		return false
	}
	return { checkToken, login, register }
}

export default useAuth