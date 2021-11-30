import React from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Badge, IconButton } from '@mui/material'
import { useStyles } from './styles'
import { useSelector } from 'react-redux'
import { favoritesSelectors } from '../../../../store/Favorites'
import BackdropLoader from '../../../UI/BackdropLoader/BackdropLoader'

const Favoriteicon = () => {
	const classes = useStyles()
	const favorites = useSelector(favoritesSelectors.getFavorites())
	const isLoading = useSelector(favoritesSelectors.isLoading())

	if (isLoading) return <BackdropLoader open={isLoading} />

	return (
		<IconButton
			aria-label="favorites" title='Favorites'
			sx={{ padding: 0 }}
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