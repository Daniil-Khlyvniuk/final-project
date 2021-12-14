import React from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Badge, IconButton } from '@mui/material'
import { useStyles } from './styles'
import { useSelector } from 'react-redux'
import { favoritesSelectors } from '../../../../store/Favorites'

const Favoriteicon = () => {
	const classes = useStyles()
	const favorites = useSelector(favoritesSelectors.getFavorites())

	return (
		<IconButton
			aria-label="favorites" title='Favorites'
			sx={{ padding: 0 }}
			data-testid='navbar-favorite-icon'
		>
			<Badge badgeContent={favorites?.length} color="success">
				<NavLink exact to='/favorites' className={classes.navbarLink}>
					<FavoriteBorderIcon />
				</NavLink>
			</Badge>
		</IconButton>
	)
}

export default Favoriteicon