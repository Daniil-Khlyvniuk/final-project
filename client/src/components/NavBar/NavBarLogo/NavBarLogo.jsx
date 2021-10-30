import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLogo = () => {
	return (
		<Typography variant="h6" component="h1">
			<NavLink exact to='/'>
				<img src="./img/header-logo.png" alt="logo" />
			</NavLink>
		</Typography>
	)
}

export default NavBarLogo