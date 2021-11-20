import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Box} from '@mui/material'
import CardInCatalog from '../CardInCatalog/CardInCatalog'
import { makeStyles } from '@mui/styles'
import {productsOperations, productsSelectors} from '../../store/Products'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '20px',
		margin: '20px auto',
		justifyContent: 'center',
	}
})

const Catalog = () => {
	const products = useSelector(productsSelectors.getProducts())
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		if (products.length) return
		dispatch(productsOperations.fetchProducts('sort=-date&perPage=4&startPage=1'))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Box className={classes.container}>
			{
				!!products
				&& products?.map((item) => {
					return (
						<CardInCatalog
							key={item._id}
							_id={item._id}
							image={'/' + item.variants.imageUrls[0]}
							title={item?.name || ''}
							price={item.variants.currentPrice}
						/>
					)
				})
			}
		</Box>
	)
}

export default Catalog