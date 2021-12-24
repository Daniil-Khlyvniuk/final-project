import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { userOperations } from '../../../../store/user'
import {snackActions} from '../../../../utils/customHooks/useSnackBarUtils'

const LogoutIconHeader = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	return (
		<IconButton
			aria-label="logout"
			title='Logout'
			sx={{ padding: 0 }}
			onClick={() => {
				dispatch(userOperations.logOut())
				snackActions.success('Successfully logged out')
			}}
			data-testid='navbar-logout-icon'
		>
			<LogoutIcon className={classes.navbarLink} />
		</IconButton >
	)
}

export default LogoutIconHeader