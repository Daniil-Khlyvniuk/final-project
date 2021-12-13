import React from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'


const CardInModal = ({ image, title, price,  amount }) => {
	const classes = useStyles()
	return (
		<Box className={classes.card}>
			<img className={classes.image} src={image} alt='img'/>
			<Box className={classes.textContainer}>
				<Typography fontSize={15} className={classes.desc}>{title}</Typography>
				<Typography fontSize={15} className={classes.desc}>
          QUANTITY: {amount}
				</Typography>
				<Typography fontSize={15} className={classes.desc}>
          USD ${price}
				</Typography>
			</Box>
		</Box>
	)
}

CardInModal.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	amount: PropTypes.number
}

export default CardInModal