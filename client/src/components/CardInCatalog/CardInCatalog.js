import React, { useEffect } from 'react'
import OtherVariants from './otherVariants/otherVariants'
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { stringSlice } from '../../utils/helpers/stringHelper'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Tooltip from '@mui/material/Tooltip'
import { useDispatch, useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'
import { favoritesOperations, favoritesSelectors } from '../../store/Favorites'
import modalActions from '../../store/Modal'
import { IconButton } from '@mui/material'
import LoginModal from '../Modal/LoginModal/LoginModal'
import { grey } from '@mui/material/colors'


const CardInCatalog = ({ title, image, price, _id, parentId, color }) => {
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
	}, [ favoritesStorage.length ])

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
		<Box className={ classes.container }>
			<Link
				to={ `/product-details/${ _id }` }
				style={ { textDecoration: 'none' } }
			>
				<img
					className={ classes.img }
					src={ image } alt="img"
					data-testid="image-catalog-card"
				/>
				<p
					className={ classes.cardTitle }
					data-testid="title-catalog-card-main"
				>
					{ stringSlice(title, 22) }
					<span
						className={ classes.cardPrice }
						data-testid="price-catalog-card-main"
					>
						{ price } $
					</span>
				</p>
			</Link>

			<Tooltip title="Click for details">
				<Box
					className={ classes.blockHover }
					sx={ { fontSize: { sm: '10px' } } }
				>
					<IconButton
						aria-label="favorites"
						title={ favoritesStorage.includes(_id) ? 'remove from favorites' : 'add to favorites' }
						sx={ {
							pointerEvents: 'auto',
							padding: 0,
							position: 'absolute',
							right: '10px',
							top: '10px'
						} }
						onClick={ !user
							? async () => {
								await handleOpen(<LoginModal />)
								await !favoritesStorage.includes(_id) && addToFavorites()
							}
							: addToFavorites
						}
						data-testid="favorite-button-catalog-card"
					>
						{ favoritesStorage.includes(_id) && user
							? <FavoriteIcon
								sx={ {
									color: grey[50],
									fontSize: {
										xl: '35px',
										lg: '35px',
										md: '30px',
										sm: '30px',
										xs: '40px'
									}
								} }
							/>
							: <FavoriteBorderIcon
								sx={ {
									color: grey[50],
									fontSize: {
										xl: '35px',
										lg: '35px',
										md: '30px',
										sm: '30px',
										xs: '40px'
									}
								} }
							/>
						}
					</IconButton>

					<Box className={ classes.contentWrapper }>
						<p
							className={ classes.hoverTitle }
							data-testid="title-catalog-card-hover"
						>
							{ stringSlice(title, 25) }
						</p>
						<p
							className={ classes.hoverPrice }
							data-testid="price-catalog-card-hover"
						>
							{ price } $
						</p>

						<OtherVariants currColor={ color } parentId={ parentId } />
					</Box>

				</Box>
			</Tooltip>
		</Box>
	)
}

CardInCatalog.propTypes = {
	_id: PropTypes.string,
	parentId: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	color: PropTypes.object
}

export default CardInCatalog