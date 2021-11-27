import React from 'react'
import { Button } from '@mui/material'
import shoppingBagReducer from '../../../store/ShoppingBag'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { ProductSelector } from '../../../store/Product'
import { userSelectors } from '../../../store/User'
// import modalActions from '../../../store/Modal'
// import { favoritesOperations } from '../../../store/Favorites'
// import LoginModal from '../../Modal/LoginModal'

const ActionButtons = () => {
	const dispatch = useDispatch()
	const activeProduct = useSelector(ProductSelector.getProduct())
	const parent = useSelector(ProductSelector.getParent())
	const user = useSelector(userSelectors.getToken())
	// const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	// const favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || []

	// const addToFavorites = () => {
	// 	if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([]))

	// 	if (favoritesStorage.includes(id)) {
	// 		const index = favoritesStorage.indexOf(id)
	// 		favoritesStorage.splice(index, 1)
	// 	} else {
	// 		favoritesStorage.push(id)
	// 	}
	// 	favoritesOperations.fetchFavorites(favoritesStorage)(dispatch)
	// 	localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
	// }

	return (
		<>
			<Button disableRipple
				sx={{ mx: '13px', padding: { lg: '21px 33px', md: '16px', sm: '10px' } }}
				variant={'contained'}
				onClick={() => {
					// eslint-disable-next-line max-len
					dispatch(shoppingBagReducer.addToShoppingBag(
						// TODO - addToShoppingBag
						[{
							title: parent.name,
							image: activeProduct.imageUrls[0],
							price: activeProduct.currentPrice,
							_id: activeProduct._id,
							amount: 1
						}]))
				}}
			>
				ADD TO BAG
			</Button>
			<Button disableRipple
				disabled={!user}
				sx={{ padding: { lg: '22px', md: '16px', sm: '12px', xs: '9px' } }} variant={'contained'}
				// onClick={!user
				// 	? () => handleOpen(<LoginModal />)
				// 	: addToFavorites
				// }
			>
				{/* {favoritesStorage.includes(id)
					? <FavoriteOutlinedIcon fontSize={'small'} />
					: <FavoriteBorderOutlinedIcon fontSize={'small'} />
				} */}
				<FavoriteBorderOutlinedIcon fontSize={'small'} />
			</Button>
		</>
	)
}

export default ActionButtons