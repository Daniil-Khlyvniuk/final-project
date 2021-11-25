import React from 'react'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const CardInModal = ({ image, title, price, size, amount }) => {
	const classes = useStyles()
	return (
		<div className={classes.card}>
			<img className={classes.image} src={image} alt='img'/>
			<div className={classes.textContainer}>
				<Typography fontSize={16} variant={'p'} className={classes.desc}>{title}</Typography>
				<Typography fontSize={16} variant={'p'} className={classes.desc}>QUANTITY: {amount}</Typography>
				<Typography fontSize={16} variant={'p'} className={classes.desc}>SIZE: {size}</Typography>
				<Typography fontSize={16} variant={'p'} className={classes.desc}>USD ${price}</Typography>
			</div>
		</div>
	)
}

CardInModal.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.string,
	amount: PropTypes.string
}

export default CardInModal
