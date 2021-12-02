import React from 'react'
import { Button } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { ProductSelector } from '../../../store/Product'
import modalActions from '../../../store/Modal'
import { favoritesOperations, favoritesSelectors } from '../../../store/Favorites'
import LoginModal from '../../Modal/LoginModal'
import useHandleShoppingBag from '../../../utils/customHooks/useHandleShoppingBag'

const ActionButtons = () => {
	const handleShoppingBag = useHandleShoppingBag()
	const activeProduct = useSelector(ProductSelector.getProduct())
	const dispatch = useDispatch()
	const user = localStorage.getItem('userToken')
	// eslint-disable-next-line no-unused-vars
	const favorites = useSelector(favoritesSelectors.getFavorites())
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	const favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || []

	const addToFavorites = () => {
		if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([]))

		if (favoritesStorage.includes(activeProduct._id)) {
			const index = favoritesStorage.indexOf(activeProduct._id)
			favoritesStorage.splice(index, 1)
		} else {
			favoritesStorage.push(activeProduct._id)
		}
		favoritesOperations.fetchFavorites(favoritesStorage)(dispatch)
		localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
	}

	return (
		<>
			<Button
				disableRipple
				sx={{ mx: '13px', padding: { lg: '21px 33px', md: '16px', sm: '10px' } }}
				variant={'contained'}
				onClick={() => handleShoppingBag.add(activeProduct._id)}
			>
				ADD TO BAG
			</Button>
			<Button disableRipple
				title={favoritesStorage.includes(activeProduct._id) ? 'remove from favorites' : 'add to favorites'}
				sx={{ padding: { lg: '22px', md: '16px', sm: '12px', xs: '9px' } }} variant={'contained'}
				onClick={!user
					? async () => {
						await handleOpen(<LoginModal />)
						await !favoritesStorage.includes(activeProduct._id)
							&& addToFavorites()
					}
					: addToFavorites
				}
			>
				{favoritesStorage.includes(activeProduct._id) && user
					? <FavoriteOutlinedIcon fontSize={'small'} />
					: <FavoriteBorderOutlinedIcon fontSize={'small'} />
				}
			</Button>
		</>
	)
}

export default ActionButtons