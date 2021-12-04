import React from 'react'
import { useStyles } from './styles'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'

const CardInCatalog = ({ title, image, price, _id }) => {
	const classes = useStyles()

	return (
		// <Box>
		<Box className={classes.container}>
			<img className={classes.img} src={image} alt='img' />
			<p className={classes.catalogTitle}>{title.slice(0, 40) + '...'}</p>
			<Box className={classes.blockHover}>
				<p className={classes.title}>{title.slice(0, 40) + '...'}</p>
				<p className={classes.price}>{price} $</p>
				<Button
					color={'white'}
					component={Link}
					to={`/product-details/${_id}`}
					sx={{ paddingY: '10px', paddingX: '40px', mb: '15px' }}
					variant={'contained'}>
						buy now
				</Button>
			</Box>
		</Box>
		// </Box/>
	)
}

CardInCatalog.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
}

export default CardInCatalog