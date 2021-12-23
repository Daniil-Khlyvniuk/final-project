import React from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { stringSlice } from '../../utils/helpers/stringHelper'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import Icon from './ProductCardElems/Icon'

const ProductCard = ({ _id, image, title, price }) => {
	const classes = useStyles()

	return (
		<Box className={classes.card}>
			<FavoriteButton
				id={_id}
				dataTestid='favorite-button-product-card'
			>
				<Icon id={_id} />
			</FavoriteButton>
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