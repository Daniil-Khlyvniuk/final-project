import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { userOperations } from '../../../../store/User'
import useSnack from '../../../../utils/customHooks/useSnack'

const LogoutIconHeader = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const {handleSnack} = useSnack()

	return (
		<IconButton
			aria-label="logout"
			title='Logout'
			sx={{ padding: 0 }}
			onClick={() => {
				dispatch(userOperations.logOut())
				handleSnack({message: 'Successfully logged out', style: 'success'})
			}}
		>
			<LogoutIcon className={classes.navbarLink} />
		</IconButton >
	)
}

export default LogoutIconHeader