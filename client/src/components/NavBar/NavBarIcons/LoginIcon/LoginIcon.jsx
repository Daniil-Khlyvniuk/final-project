import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import modalActions from '../../../../store/Modal'

const LoginIcon = () => {
	const dispatch = useDispatch()
	const handleOpen = () => dispatch(modalActions.handleOpen(true))

	return (
		<IconButton aria-label="favorites" sx={{ padding: 0 }} onClick={handleOpen}>
			<PersonOutlineIcon />
		</IconButton>
	)
}

export default LoginIcon