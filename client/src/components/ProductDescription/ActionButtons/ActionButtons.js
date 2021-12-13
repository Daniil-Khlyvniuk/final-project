import React from 'react'
import { Button } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { ProductSelector } from '../../../store/Product'
import modalActions from '../../../store/Modal'
import { favoritesOperations, favoritesSelectors } from '../../../store/Favorites'
import LoginModal from '../../Modal/LoginModal/LoginModal'
import useHandleShoppingBag from '../../../utils/customHooks/useHandleShoppingBag'
import { userSelectors } from '../../../store/User'
import useSnack from '../../../utils/customHooks/useSnack'
import { useTheme } from '@mui/styles'

const ActionButtons = () => {
	// eslint-disable-next-line no-unused-vars
	const handleShoppingBag = useHandleShoppingBag()
	const activeProduct = useSelector(ProductSelector.getProduct())
	const dispatch = useDispatch()
	const user = useSelector(userSelectors.getData())
	// eslint-disable-next-line no-unused-vars
	const favorites = useSelector(favoritesSelectors.getFavorites())
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	const favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || []
	const allSizes = useSelector(ProductSelector.allSizes())
	const allColors = useSelector(ProductSelector.allColors())
	const parent = useSelector(ProductSelector.getParent())
	const {handleSnack} = useSnack()
	const theme = useTheme()

	console.log(222,activeProduct)
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
				disabled={activeProduct.quantity < 1}
				sx={{ mx: '13px',
					padding: { lg: '21px 33px', md: '16px', sm: '10px' },
					[theme.breakpoints.between('766', '860')] : {fontSize :'9px'}
				}}
				variant={'contained'}
				onClick={() => {
					// eslint-disable-next-line max-len
					const activeSizeName = allSizes.filter(i => i.size._id === activeProduct.size)
					// eslint-disable-next-line max-len
					const activeColorName = allColors.filter(i => i._id === activeProduct.color)
					// eslint-disable-next-line no-console

					handleShoppingBag.add({
						...activeProduct,
						size:activeSizeName[0].size.name,
						color:activeColorName[0].name,
						title : parent.name,
						description: parent.description

					})
					handleSnack({message: 'Successfully added to shopping bug', style: 'success'})
				}}
			>
				ADD TO BAG
			</Button>
			<Button disableRipple
				title={favoritesStorage.includes(activeProduct._id) ? 'remove from favorites' : 'add to favorites'}
				sx={{
					padding: { lg: '22px', md: '16px', sm: '12px', xs: '9px' },
					[theme.breakpoints.between('766', '860')] : {padding :'12px'}
				}} variant={'contained'}
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
