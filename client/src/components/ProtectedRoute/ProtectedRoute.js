import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { userSelectors } from '../../store/User'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, ...rest }) => {
	const user = useSelector(userSelectors.getData())
	const isLoggedIn = !!user

	return (
		<Route {...rest}>
			{isLoggedIn ? children : <Redirect to='/' />}
		</Route>
	)
}

ProtectedRoute.propTypes = {
	isLoggedIn: PropTypes.bool,
	children: PropTypes.object
}

export default ProtectedRoute