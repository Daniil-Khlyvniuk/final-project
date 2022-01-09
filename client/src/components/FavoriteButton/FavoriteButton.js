import React from 'react'
import { IconButton } from '@mui/material'
import favoritesActions, { favoritesSelectors } from '../../store/favorites'
import LoginModal from '../Modal/LoginModal/LoginModal'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userSelectors } from '../../store/user'
import modalActions from '../../store/modal'
import PropTypes from 'prop-types'
import favoritesAPI from '../../utils/API/favoritesAPI'
import { snackActions } from '../../utils/customHooks/useSnackBarUtils'

const FavoriteButton = ({ id, dataTestid, children }) => {
	const user = useSelector(userSelectors.getData())
	const isFavorite = useSelector(favoritesSelectors.isFavorite(id))
	const location = useLocation()
	const dispatch = useDispatch()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))

	const addToFavorites = () => {
		favoritesAPI.toggleFavorites(id).then(res => {
			dispatch(favoritesActions.setFavoritesIds(res.data?.products))
		})
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
					!isFavorite && snackActions.success('Successfully added to favorites')
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