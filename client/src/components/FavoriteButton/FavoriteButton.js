import React, { useEffect } from 'react'
import { IconButton } from '@mui/material'
import favoritesActions, { favoritesSelectors, favoritesOperations } from '../../store/favorites'
import LoginModal from '../Modal/LoginModal/LoginModal'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userSelectors } from '../../store/user'
import useSnack from '../../utils/customHooks/useSnack'
import modalActions from '../../store/modal'
import PropTypes from 'prop-types'

const FavoriteButton = ({ id, dataTestid, children }) => {
	const user = useSelector(userSelectors.getData())
	const isFavorite = useSelector(favoritesSelectors.isFavorite(id))
	const location = useLocation()
	const dispatch = useDispatch()
	const { handleSnack } = useSnack()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	const favoriteID = JSON.parse(localStorage.getItem('favorites')) || []

	useEffect(() => {
		favoritesOperations.fetchFavorites(favoriteID)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favoriteID.length])

	const addToFavorites = () => {
		dispatch(favoritesActions.handleOneFavorite(id))
	}

	return (
		<IconButton
			aria-label="favorites"
			title={isFavorite ? 'remove from favorites' : 'add to favorites'}
			sx={{
				pointerEvents: 'auto',
				padding: 0,
				position: 'absolute',
				right: '10px',
				top: '10px'
			}}
			onClick={!user
				? async () => {
					location.state = { ...location.state, productToFavorite: id }
					await handleOpen(<LoginModal />)
				}
				: () => {
					addToFavorites()
					handleSnack({ message: 'Successfully added to favorites', style: 'success' })
				}
			}
			data-testid={dataTestid}
		>
			{children}
		</IconButton>
	)
}

FavoriteButton.propTypes = {
	id: PropTypes.string.isRequired,
	dataTestid: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
}

export default FavoriteButton