import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { favoritesOperations } from '../../../store/favorites'
import PropTypes from 'prop-types'
import { userSelectors } from '../../../store/user'

const Favoriteicon = ({ id }) => {
	const user = useSelector(userSelectors.getToken())
	const dispatch = useDispatch()
	const favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || []

	const addToFavorites = () => {
		if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([]))

		if (favoritesStorage.includes(id)) {
			const index = favoritesStorage.indexOf(id)
			favoritesStorage.splice(index, 1)
		} else {
			favoritesStorage.push(id)
		}
		favoritesOperations.fetchFavorites(favoritesStorage)(dispatch)
		localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
	}

	return (
		<IconButton
			aria-label="favorites"
			title={favoritesStorage.includes(id) ? 'remove from favorites' : 'add to favorites'}
			sx={{
				padding: 0,
				position: 'absolute',
				right: '10px',
				top: '10px',
			}}
			onClick={addToFavorites}
		>
			{favoritesStorage.includes(id) && user
				? <FavoriteIcon sx={{ fontSize: { xl: '50px', lg: '50px', md: '40px', xs: '30px' } }} />
				: <FavoriteBorderIcon sx={{ fontSize: { xl: '50px', lg: '50px', md: '40px', xs: '30px' } }} />
			}
		</IconButton>
	)
}

Favoriteicon.propTypes = {
	id: PropTypes.string
}

export default Favoriteicon