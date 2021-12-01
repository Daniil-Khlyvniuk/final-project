import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../ProductCard/ProductCard'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import { productsOperations, productsSelectors } from '../../store/Products'


const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '20px',
		maxWidth: '1180px',
		margin: '0 auto',
		justifyContent: 'space-between'
	},
	title: theme.typography.sectionHeading,
}))

const CardList = () => {
	const products = useSelector(productsSelectors.getProducts())
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		dispatch(productsOperations.fetchProducts('sort=-date&perPage=4&startPage=1'))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	console.log(products)

	return (
		<div>
			<Typography
				fontSize={32}
				sx={{ mb: '14px', mt: '85px' }}
				variant={'h2'}
				className={classes.title}
			>
				NEW IN
			</Typography>
			<div className={classes.container}>
				{
					!!products?.length
					&&
					products.map(item => (
						<Card
							key={item._id}
							_id={item.variants._id}
							image={'/' + item.variants.imageUrls[0]}
							title={item?.name || ''}
							price={item.variants.currentPrice}
							inModal={false}
						/>
					))
				}
			</div>
		</div>
	)
}

export default CardList
