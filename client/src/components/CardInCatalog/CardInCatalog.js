import React from 'react'
import { useStyles } from './styles'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { stringSlice } from '../../utils/helpers/stringHelper'

const CardInCatalog = ({ title, image, price, _id }) => {
	const classes = useStyles()

	return (
		<Box className={classes.container}>
			<img className={classes.img} src={image} alt='img' />
			<p className={classes.catalogTitle}>
				{stringSlice(title, 30)}
			</p>
			<Box
				className={classes.blockHover}
				sx={{ fontSize: { sm: '10px' } }}
			>
				<p className={classes.title}>
					{stringSlice(title, 30)}
				</p>
				<p className={classes.price}>{price} $</p>
				<Button
					color={'white'}
					component={Link}
					to={`/product-details/${_id}`}
					sx={{ padding: '10px 40px' }}
					variant={'contained'}
				>
					Buy now
				</Button>
			</Box>
		</Box>
	)
}

CardInCatalog.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
}

export default CardInCatalog