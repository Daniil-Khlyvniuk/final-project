import React from 'react'
import {useStyles} from './styles'

// eslint-disable-next-line react/prop-types
const CardInCatalog = ({title, image, price}) => {
	const classes = useStyles()

	return (
		<div>
			<div className={classes.container}>
				<img className={classes.img} src={image} alt='img'/>
				<p className={classes.catalogTitle}>{title}</p>
				<div className={classes.blockHover}>
					<p className={classes.title}>{title}</p>
					<p className={classes.price}>{price}</p>
					<button className={classes.btn}>BUY NOW</button>
				</div>
			</div>
		</div>
	)
}

export default CardInCatalog