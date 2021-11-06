import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = ({isLoggedIn, children, ...rest}) => {
	return (
		<Route {...rest}>
			{isLoggedIn ? children : <Redirect to='/login' />}
		</Route>
	)
}

ProtectedRoute.propTypes = {
	isLoggedIn: PropTypes.bool,
	children: PropTypes.object
}

export default ProtectedRoute