import React from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { IconButton, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link, useLocation } from 'react-router-dom'
import { stringSlice } from '../../utils/helpers/stringHelper'
import { useDispatch, useSelector } from 'react-redux'
import { userSelectors } from '../../store/user'
import favoritesActions, { favoritesSelectors } from '../../store/favorites'
import modalActions from '../../store/modal'
import LoginModal from '../Modal/LoginModal/LoginModal'

const ProductCard = ({ _id, image, title, price }) => {
	const classes = useStyles()
	const user = useSelector(userSelectors.getData())
	const isFavorite = useSelector(favoritesSelectors.isFavorite(_id))
	const dispatch = useDispatch()
	const location = useLocation()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))

	const addToFavorites = () => {
		dispatch(favoritesActions.handleOneFavorite(_id))
	}

	return (
		<Box className={classes.card}>
			<IconButton
				aria-label="favorites"
				title={isFavorite ? 'remove from favorites' : 'add to favorites'}
				sx={{
					padding: 0,
					position: 'absolute',
					right: '10px',
					top: '10px',
				}}
				onClick={!user
					? async () => {
						location.state = { ...location.state, productToFavorite: _id }
						await handleOpen(<LoginModal />)
					}
					: addToFavorites
				}
				data-testid='favorite-button-product-card'
			>
				{isFavorite && user
					? <FavoriteIcon
						sx={{
							fontSize: {
								xl: '50px',
								lg: '50px',
								md: '40px',
								xs: '30px'
							}
						}}
					/>
					: <FavoriteBorderIcon
						sx={{
							fontSize: {
								xl: '50px',
								lg: '50px',
								md: '40px',
								xs: '30px'
							}
						}}
					/>
				}
			</IconButton>
			<Link
				to={`/product-details/${_id}`}
				style={{ textDecoration: 'none' }}
			>
				<Box className={classes.imageWrapper}>
					<img
						className={classes.image}
						src={image} alt='img'
						data-testid='image-product-card'
					/>
				</Box>
				<Box className={classes.textContainer}>
					<Typography
						className={classes.title}
						sx={{
							fontSize: {
								xl: '24px',
								lg: '24px',
								l: '22px',
								md: '20px',
								sm: '16px',
								xs: '18px'
							},
							textTransform: 'capitalize'
						}}
						data-testid='title-product-card'
					>
						{stringSlice(title, 30)}
					</Typography>
					<Box
						component="div"
						display="inline"
						className={classes.price}
						data-testid='price-product-card'
					>
						${price}
					</Box>
				</Box>
			</Link>
		</Box>
	)
}

ProductCard.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
}

export default ProductCard