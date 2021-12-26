import React from 'react'
import { Button } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { ProductSelector } from '../../../store/product'
import modalActions from '../../../store/modal'
import favoritesActions, { favoritesSelectors } from '../../../store/favorites'
import { useLocation } from 'react-router-dom'
import LoginModal from '../../Modal/LoginModal/LoginModal'
import useHandleShoppingBag from '../../../utils/customHooks/useHandleShoppingBag'
import { userSelectors } from '../../../store/user'
import { snackActions } from '../../../utils/customHooks/useSnackBarUtils'
import { useTheme } from '@mui/styles'
import favoritesAPI from '../../../utils/API/favoritesAPI'

const ActionButtons = () => {
	const handleShoppingBag = useHandleShoppingBag()
	const activeProduct = useSelector(ProductSelector.getProduct())
	const dispatch = useDispatch()
	const location = useLocation()
	const user = useSelector(userSelectors.getData())
	const isFavorite = useSelector(
		favoritesSelectors.isFavorite(activeProduct._id)
	)
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	const allSizes = useSelector(ProductSelector.allSizes())
	const allColors = useSelector(ProductSelector.allColors())
	const parent = useSelector(ProductSelector.getParent())
	const theme = useTheme()

	const addToFavorites = () => {
		favoritesAPI.toggleFavorites(activeProduct._id).then(res => {
			dispatch(favoritesActions.setFavoritesIds(res.data.products))
		})
	}

	return (
		<>
			<Button
				disableRipple
				disabled={activeProduct.quantity < 1}
				sx={{
					mx: '13px',
					padding: { lg: '21px 33px', md: '16px', sm: '10px' },
					[theme.breakpoints.between('766', '860')]: { fontSize: '9px' }
				}}
				variant={'contained'}
				onClick={() => {
					const activeSizeName = allSizes.filter(
						i => i.size._id === activeProduct.size
					)
					const activeColorName = allColors.filter(
						i => i._id === activeProduct.color
					)

					handleShoppingBag.add({
						...activeProduct,
						size: activeSizeName[0].size.name,
						color: activeColorName[0].name,
						title: parent.name,
						description: parent.description
					})
					snackActions.success('Successfully added to shopping bag')
				}}
			>
				ADD TO BAG
			</Button>
			<Button disableRipple
				title={isFavorite ? 'remove from favorites' : 'add to favorites'}
				sx={{
					padding: { lg: '22px', md: '16px', sm: '12px', xs: '9px' },
					[theme.breakpoints.between('766', '860')]: { padding: '12px' }
				}} variant={'contained'}
				onClick={!user
					? async () => {
						location.state = {
							...location.state,
							productToFavorite: activeProduct._id
						}
						await handleOpen(<LoginModal />)
					}
					: () => {
						addToFavorites()
					}
				}
			>
				{isFavorite && user
					? <FavoriteOutlinedIcon fontSize={'small'} />
					: <FavoriteBorderOutlinedIcon fontSize={'small'} />
				}
			</Button>
		</>
	)
}

export default ActionButtons