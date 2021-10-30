import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = ({isLoggedIn, children, ...rest}) => {
  return (
    <Route {...rest}>
      {isLoggedIn ? children : <Redirect to='/login' />}
    </Route>
  )
}

export default ProtectedRoute