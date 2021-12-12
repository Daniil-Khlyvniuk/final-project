import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import modalActions from '../../../../store/Modal'
<<<<<<< HEAD
import LoginModal from '../../../Modal/LoginModal'
=======
import LoginModal from '../../../Modal/LoginModal/LoginModal'
>>>>>>> develop

const LoginIcon = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))

	return (
		<IconButton
			aria-label="login"
			title='Login'
			sx={{ padding: 0 }}
			onClick={() => handleOpen(<LoginModal />)}
<<<<<<< HEAD
=======
			data-testid='navbar-login-icon'
>>>>>>> develop
		>
			<PersonOutlineIcon className={classes.navbarLink} />
		</IconButton>
	)
}

export default LoginIcon