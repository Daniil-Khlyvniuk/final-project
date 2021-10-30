import React from 'react'
import {NavLink } from 'react-router-dom'
import { useFormStyle } from './hooks/useFormStyle'

const Form = () => {
	const classes = useFormStyle()
	return (
		<div className={classes.switchForm}>
			<NavLink
				className={classes.signin}
				exact to='/signup'
				activeClassName='selected'
			>SIGN UP</NavLink>
			<NavLink
				className={classes.login}
				exact to='/login'
				activeClassName='selected'
			>LOG IN</NavLink>
		</div>
	)
}

export default Form