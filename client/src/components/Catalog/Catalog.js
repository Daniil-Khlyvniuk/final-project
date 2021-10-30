import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as productsActions from '../../store/actions/products'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		maxWidth: '880px',
		gap: '20px',
		margin: '0 auto',
		justifyContent: 'center',
	}
})

const Catalog = () => {
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
		// eslint-disable-next-line max-len
		<div className={classes.container}>
			{/* eslint-disable-next-line max-len */}
			{products.map((item, key) => <CardInCatalog key={key} price={item.price} title={item.title} image={item.img}/>)}
		</div>
	)
}

export default Catalog