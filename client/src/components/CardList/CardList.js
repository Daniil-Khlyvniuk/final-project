import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import { Grid, Typography } from '@mui/material'
import { productsOperations, productsSelectors } from '../../store/products'
import BackdropLoader from '../UI/BackdropLoader/BackdropLoader'
import { Box } from '@mui/system'


const CardList = () => {
	const products = useSelector(productsSelectors.getProducts())
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(productsOperations.fetchProducts('sort=-date&perPage=4&startPage=1'))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Box>
			{isLoading && <BackdropLoader open={isLoading} />}
			<Typography
				fontSize={32}
				sx={{ mb: '14px', mt: '85px' }}
				variant={'h4'}
			>
				New in
			</Typography>
			<Grid container spacing={2} sx={{ marginBottom: '40px' }} data-testid='product-container'>
				{products?.map(item => (
					<Grid item md={6} sm={6} xs={12} key={item.variants._id}>
						<ProductCard
							_id={item.variants._id}
							sx={{ width: { sm: '580px' }, height: { sm: '545px' } }}
							image={'/' + item.variants.imageUrls[0]}
							title={item.name}
							price={item.variants.currentPrice}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default CardList