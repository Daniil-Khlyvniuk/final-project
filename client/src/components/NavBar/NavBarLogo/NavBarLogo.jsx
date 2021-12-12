import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStyles } from './styles'

const NavBarLogo = () => {
	const classes = useStyles()

	return (
<<<<<<< HEAD
		<Typography variant="h6" component="h1" >
=======
		<Typography variant="h6" component="h1" data-testid='navbar-logo'>
>>>>>>> develop
			<NavLink exact to='/'>
				<div className={classes.logoWrapper} >
					<img src="/logo/header-logo.png" alt="logo" />
				</div>
			</NavLink>
		</Typography>
	)
}

export default NavBarLogo