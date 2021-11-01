import React from 'react'
import { NavLink } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'

const LoginIcon = () => {
	const classes = useStyles()

	return (
		<IconButton aria-label="favorites" sx={{ padding: 0 }}>
			<NavLink exact to='/login' className={classes.navbarLink}>
				<PersonOutlineIcon />
			</NavLink>
		</IconButton>
	)
}

export default LoginIcon