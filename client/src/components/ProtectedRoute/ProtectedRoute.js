import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isLoggedIn, children, ...rest }) => {
	return (
		<Route { ...rest }>
			{ isLoggedIn ? children : <Redirect to="/login"/> }
		</Route>
	)
}

export default ProtectedRoute