import React from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Favoriteicon from './FavotiteIcon/FavoriteIcon'
import { Link } from 'react-router-dom'

const ProductCard = ({ _id, image, title, price }) => {
	const classes = useStyles()

	// eslint-disable-next-line no-console
	console.log('_id', _id)

	return (
		<Box className={classes.card}>
			<Favoriteicon id={_id} />
			<Link
				to={`/product-details/${_id}`}
				style={{ textDecoration: 'none' }}
			>
				<img className={classes.image} src={image} alt='img' />
				<Box className={classes.textContainer}>
					<Typography
						className={classes.title}
						sx={{ fontSize: 24 }}>
						{title}
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