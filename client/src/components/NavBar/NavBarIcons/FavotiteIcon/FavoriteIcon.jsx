import React from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'
import { useStyles } from './styles'

const Favoriteicon = () => {
	const classes = useStyles()

	return (
		<IconButton aria-label="favorites" title='Favorites' sx={{ padding: 0 }}>
			<NavLink exact to='/favorites' className={classes.navbarLink}>
				<FavoriteBorderIcon />
			</NavLink>
		</IconButton>
	)
}

export default Favoriteicon