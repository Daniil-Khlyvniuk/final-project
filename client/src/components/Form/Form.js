import React from 'react'
import {NavLink } from 'react-router-dom'

const Form = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink exact to='/signup' activeClassName='selected'>SIGN UP</NavLink>
				</li>
				<li>
					<NavLink exact to='/login' activeClassName='selected'>LOG IN</NavLink>
				</li>
			</ul>

		</div>
	)
}

export default Form