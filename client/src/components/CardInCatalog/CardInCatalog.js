import React from 'react'
import {useStyles} from './styles'
// eslint-disable-next-line no-unused-vars
import * as shoppingBagActions from '../../store/ShoppingBag/shoppingBagSlice'
import {useDispatch} from 'react-redux'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const CardInCatalog = ({title, image, price, _id}) => {
	const classes = useStyles()
	
	// eslint-disable-next-line no-unused-vars
	const dispatch = useDispatch()

	// eslint-disable-next-line no-unused-vars
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
				<p className={classes.catalogTitle}>{title.slice(0, 40 ) +'...'}</p>
				<div className={classes.blockHover}>
					<p className={classes.title}>{title.slice(0, 40 ) +'...'}</p>
					<p className={classes.price}>{price} $</p>
					{/* <button className={classes.btn} onClick={buy}>BUY NOW</button> */}
					<Button
						color={'white'}
						component={Link}
						to={`/product-details/${_id}`}
						sx={{paddingY: '10px', paddingX: '40px', mb: '15px'}}
						variant={'contained'}>
							buy now
					</Button>
				</div>
			</div>
		</div>
	)
}

CardInCatalog.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
}

export default CardInCatalog
