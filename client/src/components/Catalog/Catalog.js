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
		dispatch(productsOperations.fetchProducts())
	}, [dispatch])

	return (

		<div className={classes.container}>
			{
				!!products?.list
				&& products?.list?.map((item, key) => (
					<CardInCatalog
						key={key} image={item.img}
						title={item.title}
						price={item.price} />
				))
			}
		</div>
	)
}

export default Catalog