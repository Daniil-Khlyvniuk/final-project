import React from 'react'
import {useStyles} from './styles'
import * as shoppingBagActions from '../../store/ShoppingBag/shoppingBagSlice'
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types'

const CardInCatalog = ({title, image, price, _id}) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const buy = () => {
		const ls = JSON.parse(localStorage.getItem('shoppingBag') || '[]') || []
		localStorage.setItem('shoppingBag',
			JSON.stringify([...ls, ...[{title, image, price, _id}]])
		)
		dispatch(shoppingBagActions.addToShoppingBag(
			[...ls, ...[{title, image, price, _id}]]
		))
	}

	return (
		<div>
			<div className={classes.container}>
				<img className={classes.img} src={image} alt='img'/>
				<p className={classes.catalogTitle}>{title}</p>
				<div className={classes.blockHover}>
					<p className={classes.title}>{title}</p>
					<p className={classes.price}>{price} $</p>
					<button className={classes.btn} onClick={buy}>BUY NOW</button>
				</div>
			</div>
		</div>
	)
}

CardInCatalog.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.string,
}

export default CardInCatalog