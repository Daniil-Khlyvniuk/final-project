import React from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Favoriteicon from './FavotiteIcon/FavoriteIcon'
import { Link } from 'react-router-dom'

const FavoriteCard = ({ _id, image, title, price }) => {
	const classes = useStyles()

	return (
		<Box className={classes.card}>
			<Favoriteicon id={_id} />
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
						sx={{ fontSize: { lg: '24px', l: '24px', md: '20px', sm: '16px', xs: '16px' } }}
					>
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

FavoriteCard.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
}

export default FavoriteCard