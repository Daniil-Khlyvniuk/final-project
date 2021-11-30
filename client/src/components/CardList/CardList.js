import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../ProductCard/ProductCard'
import { makeStyles } from '@mui/styles'
import { Container, Grid, Typography } from '@mui/material'
import { productsOperations, productsSelectors } from '../../store/Products'
import BackdropLoader from '../UI/BackdropLoader/BackdropLoader'

const useStyles = makeStyles((theme) => ({
	title: theme.typography.sectionHeading,
}))

const CardList = () => {
	const products = useSelector(productsSelectors.getProducts())
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		dispatch(productsOperations.fetchProducts('sort=-date&perPage=4&startPage=1'))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container maxWidth="lg" sx={{ minWidth: 320 }}>
			{isLoading && <BackdropLoader open={isLoading} />}
			<Typography
				fontSize={32}
				sx={{ mb: '14px', mt: '85px' }}
				variant={'h2'}
				className={classes.title}
			>
				NEW IN
			</Typography>
			<Grid container spacing={2} sx={{ marginBottom: '40px' }} >
				{
					!!products?.length
					&&
					products.map(item => (
						<Card
							key={item._id}
							_id={item.variants._id}
							image={'/' + item.variants.imageUrls[0]}
							title={item?.name || ''}
							price={item.variants.currentPrice} />
					))
				}
			</Grid>
		</Container>
	)
}

export default CardList