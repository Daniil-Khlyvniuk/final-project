import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { IconButton } from '@mui/material'

const useStyles = makeStyles(() => ({
	navbarLink: {
		color: '#373F41',
	}
}))

const LoginIcon = () => {
	const { navbarLink } = useStyles()

	return (
		<IconButton aria-label="favorites" sx={{ padding: 0 }}>
			<NavLink exact to='/login' className={navbarLink}>
				<PersonOutlineIcon />
			</NavLink>
		</IconButton>
	)
}

export default LoginIcon