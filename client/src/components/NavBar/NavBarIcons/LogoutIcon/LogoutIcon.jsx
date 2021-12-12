import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { userOperations } from '../../../../store/User'
<<<<<<< HEAD
=======
import useSnack from '../../../../utils/customHooks/useSnack'
>>>>>>> develop

const LogoutIconHeader = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
<<<<<<< HEAD
=======
	const { handleSnack } = useSnack()
>>>>>>> develop

	return (
		<IconButton
			aria-label="logout"
			title='Logout'
			sx={{ padding: 0 }}
<<<<<<< HEAD
			onClick={() => dispatch(userOperations.logOut())}
=======
			onClick={() => {
				dispatch(userOperations.logOut())
				handleSnack({ message: 'Successfully logged out', style: 'success' })
			}}
			data-testid='navbar-logout-icon'
>>>>>>> develop
		>
			<LogoutIcon className={classes.navbarLink} />
		</IconButton >
	)
}

export default LogoutIconHeader