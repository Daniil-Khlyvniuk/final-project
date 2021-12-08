import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { userSelectors } from '../../store/User'
import { useSelector } from 'react-redux'
import BackdropLoader from '../UI/BackdropLoader/BackdropLoader'

const ProtectedRoute = ({ children, ...rest }) => {
	const token = useSelector(userSelectors.getToken())
	const isLoading = useSelector(userSelectors.getIsLoading())


	if(isLoading){
		return <BackdropLoader open={isLoading}/>
	}

	return (
		<Route {...rest}>
			{token ? children : <Redirect to='/' />}
		</Route>
	)
}

ProtectedRoute.propTypes = {
	isLoggedIn: PropTypes.bool,
	children: PropTypes.object
}

export default ProtectedRoute