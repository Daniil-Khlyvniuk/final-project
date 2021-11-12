import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStyles } from './styles'

const NavBarLogo = () => {
	const classes = useStyles()

	return (
		<Typography variant="h6" component="h1" >
			<NavLink exact to='/'>
				<div className={classes.logoWrapper} >
					<img src="/logo/header-logo.png" alt="logo" />
				</div>
			</NavLink>
		</Typography>
	)
}

export default NavBarLogo