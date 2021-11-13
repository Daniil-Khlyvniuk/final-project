import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'

const LogoutIconHeader = () => {
	const classes = useStyles()

	return (
		<IconButton aria-label="logout" title='Logout' sx={{ padding: 0 }} onClick={() => { }}>
			<LogoutIcon className={classes.navbarLink} />
		</IconButton >
	)
}

export default LogoutIconHeader