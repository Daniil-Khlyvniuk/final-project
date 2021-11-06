import React from 'react'
import {useStyles} from './styles'

// eslint-disable-next-line react/prop-types
const ProductCard = ({image,title,price}) => {
	const classes = useStyles()
	return (
		<div className={classes.card}>
			<img className={classes.image} src={image} alt='img'/>
			<div className={classes.textContainer}>
				<p className={classes.title}>{title}</p>
				<span className={classes.price}>{price}</span>
			</div>
		</div>
	)
}

export default ProductCard