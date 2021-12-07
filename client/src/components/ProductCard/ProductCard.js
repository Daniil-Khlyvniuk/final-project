import React, { useEffect } from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { IconButton, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'
import { stringSlice } from '../../utils/helpers/stringHelper'
import { useDispatch, useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'
import { favoritesOperations, favoritesSelectors } from '../../store/Favorites'
import modalActions from '../../store/Modal'
import LoginModal from '../Modal/LoginModal/LoginModal'

const ProductCard = ({ _id, image, title, price }) => {
	const classes = useStyles()
	const user = useSelector(userSelectors.getData())
	// eslint-disable-next-line no-unused-vars
	const favorites = useSelector(favoritesSelectors.getFavorites())
	const dispatch = useDispatch()
	const handleOpen = (content) => dispatch(modalActions.modalToggle(content))
	const favoritesStorage = JSON.parse(localStorage.getItem('favorites')) || []

	useEffect(() => {
		favoritesOperations.fetchFavorites(favoritesStorage)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favoritesStorage.length])

	const addToFavorites = () => {
		if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([]))

		if (favoritesStorage.includes(_id)) {
			const index = favoritesStorage.indexOf(_id)
			favoritesStorage.splice(index, 1)
		} else {
			favoritesStorage.push(_id)
		}
		favoritesOperations.fetchFavorites(favoritesStorage)(dispatch)
		localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
	}

	return (
		<Box className={classes.card}>
			<IconButton
				aria-label="favorites"
				title={favoritesStorage.includes(_id) ? 'remove from favorites' : 'add to favorites'}
				sx={{
					padding: 0,
					position: 'absolute',
					right: '10px',
					top: '10px',
				}}
				onClick={!user
					? async () => {
						await handleOpen(<LoginModal />)
						await !favoritesStorage.includes(_id) && addToFavorites()
					}
					: addToFavorites
				}
			>
				{favoritesStorage.includes(_id) && user
					? <FavoriteIcon sx={{ fontSize: { xl: '50px', lg: '50px', md: '40px', xs: '30px' } }} />
					: <FavoriteBorderIcon sx={{ fontSize: { xl: '50px', lg: '50px', md: '40px', xs: '30px' } }} />
				}
			</IconButton>
			<Link
				to={`/product-details/${_id}`}
				style={{ textDecoration: 'none' }}
			>
				<Box className={classes.imageWrapper}>
					<img className={classes.image} src={image} alt='img' />
				</Box>
				<Box className={classes.textContainer}>
					<Typography
						className={classes.title}
						sx={{
							fontSize: { xl: '24px', lg: '24px', l: '22px', md: '20px', sm: '16px', xs: '18px' },
							textTransform: 'capitalize'
						}}
					>
						{stringSlice(title, 30)}
					</Typography>
					<Box
						component="div"
						display="inline"
						className={classes.price}
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