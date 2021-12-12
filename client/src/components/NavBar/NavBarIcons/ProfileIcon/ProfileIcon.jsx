import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'
import {useHistory} from 'react-router'


const ProfileIcon = () => {
	const classes = useStyles()
	const history = useHistory()


	return (
		<IconButton
			aria-label='personalProfile'
			title='personalProfile'
			sx={{ padding: 0 }}
			onClick={()=> history.push('/user-profile')}
<<<<<<< HEAD
=======
			data-testid='navbar-profile-icon'
>>>>>>> develop
		>
			<PersonIcon
				className={classes.navbarLink}
			/>
		</IconButton >
	)
}

export default ProfileIcon