import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { favoritesOperations } from '../../../store/Favorites'
import PropTypes from 'prop-types'
import modalActions from '../../../store/Modal'
import LoginModal from '../../../components/Modal/LoginModal'
import { userSelectors } from '../../../store/User'

const Favoriteicon = ({ id }) => {
	const user = useSelector(userSelectors.getToken())
	const dispatch = useDispatch()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
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
			onClick={!user
				? () => handleOpen(<LoginModal />)
				: addToFavorites
			}
		>
			{favoritesStorage.includes(id) && user
				? <FavoriteIcon fontSize="large" />
				: <FavoriteBorderIcon fontSize="large" />
			}
		</IconButton>
	)
}

Favoriteicon.propTypes = {
	id: PropTypes.string
}

export default Favoriteicon