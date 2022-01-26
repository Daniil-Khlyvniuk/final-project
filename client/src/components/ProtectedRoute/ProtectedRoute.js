import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { userSelectors } from '../../store/user'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, ...rest }) => {
	const token = useSelector(userSelectors.getToken())

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