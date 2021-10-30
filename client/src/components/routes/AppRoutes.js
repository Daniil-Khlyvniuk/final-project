import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import SignInForm from '../Form/SignInForm/SignInForm'
import LoginFrom from '../Form/LoginForm/LoginForm'

const AppRoutes = () => {
	return (
		<div>
			<Switch>
				<Redirect exact from='/' to='/signup'/>
				<Route exact path='/signup'><SignInForm/></Route>
				<Route exact path='/login'><LoginFrom/></Route>
			</Switch>
		</div>
	)
}

export default AppRoutes
