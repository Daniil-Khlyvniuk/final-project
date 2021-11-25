import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { favoritesOperations, favoritesSelectors } from '../../../store/Favorites'
import PropTypes from 'prop-types'
// import modalActions from '../../../store/Modal'
// import LoginModal from '../../Modal/LoginModal'
// import { userSelectors } from '../../../store/User'

const Favoriteicon = ({ id }) => {
	// const user = useSelector(userSelectors.getToken())
	const favorites = useSelector(favoritesSelectors.getFavorites())
	// eslint-disable-next-line no-console
	console.log('favorites', favorites)

	const dispatch = useDispatch()
	// const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	let favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || []

	const addToFavorites = () => {
		if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([]))

		let favoritesStorage = JSON.parse(localStorage.getItem('favorites'))

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
			title={favoritesStorage.includes(id) ? 'remove from favorites' : 'add to favorites'} // check id
			sx={{
				padding: 0,
				position: 'absolute',
				right: '10px',
				top: '10px',
				zIndex: 333
			}}
			// eslint-disable-next-line no-console
			// onClick={!user ? () => handleOpen(<LoginModal />) : console.log('test')}
			onClick={() => addToFavorites()}
		>
			{favoritesStorage.includes(id)
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