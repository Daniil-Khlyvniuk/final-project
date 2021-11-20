import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import { makeStyles } from '@mui/styles'
import {productsOperations, productsSelectors} from '../../store/Products'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		maxWidth: '880px',
		gap: '20px',
		margin: '50px auto',
		justifyContent: 'center',
	}
})

const Catalog = () => {
	const products = useSelector(productsSelectors.getProducts())
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		dispatch(productsOperations.fetchProducts('sort=-date&perPage=4&startPage=1'))
	}, [dispatch])

	console.log(products)

	return (
		<div className={classes.container}>
			{
				!!products
				&& products?.map((item) => (
					<CardInCatalog
						key={item._id}
						_id={item._id}
						image={'/' + item.imageUrls[0]}
						title={item?.product?.name || ''}
						price={item.currentPrice}
					/>
				))
			}
		</div>
	)
}

export default Catalog