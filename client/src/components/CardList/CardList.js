import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as productsActions from '../../store/actions/products'
import Card from '../ProductCard/ProductCard'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '20px', maxWidth: '1180px',
		margin: '0 auto',
		justifyContent: 'center'
	},
	title: {
		textAlign: 'center'
	}
})

const CardList = () => {

	const products = useSelector(state => state.products.data)
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		// axios.get('http://localhost:5000/products')
		// axios.get('/products.json')
		// 	.then(products => console.log(products.data))
		dispatch(productsActions.getAllProducts())
	}
	, [])

	return (
		<div>
			<p className={classes.title}>NEW IN</p>
			{/* eslint-disable-next-line max-len */}
			<div className={classes.container}>
				{/* eslint-disable-next-line max-len */}
				{products.map((item, key) => <Card key={key} image={item.img} title={item.title} price={item.price}/>)}
			</div>

		</div>
	)
}

export default CardList