import React from 'react'
import {useStyles} from './styles'
import PropTypes from 'prop-types'

const ProductCard = ({image,title,price}) => {
	const classes = useStyles()
	return (
		<div className={classes.card}>
			<img className={classes.image} src={image} alt='img'/>
			<div className={classes.textContainer}>
				<p className={classes.title}>{title}</p>
				<span className={classes.price}>{price} $</span>
			</div>
		</div>
	)
}


ProductCard.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.string,
}


export default ProductCard
