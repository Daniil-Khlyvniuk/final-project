import React, { useEffect } from 'react'
import { Button, Container, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { favoritesOperations, favoritesSelectors } from '../../store/Favorites'
import { Box } from '@mui/system'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import { Link } from 'react-router-dom'
// import ProductCard from './ProductCard'

const Favorites = () => {
	const favorites = useSelector(favoritesSelectors.getFavorites())
	// eslint-disable-next-line no-console
	console.log('favorites', favorites)
	const isLoading = useSelector(favoritesSelectors.isLoading())
	const dispatch = useDispatch()
	let productID = JSON.parse(localStorage.getItem('favorites')) || []

	useEffect(() => {
		favoritesOperations.fetchFavorites(productID)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productID.length])

	return (
		<Container maxWidth="lg">
			{isLoading && <BackdropLoader open={isLoading} />}
			{!productID.length &&
				<Box style={{ textAlign: 'center', margin: '7rem 0' }}>
					<Typography
						fontSize={32}
						sx={{ mb: '14px', mt: '85px', textTransform: 'uppercase' }}
						variant='h2'
					>
						Oops! Your wish list is empty
					</Typography>
					<Typography
						fontSize={25}
						variant='h4'
					>
						You can add items here if you haven&apos;t decided to buy them yet
					</Typography>
					<Link
						to={'/shop/catalog'}
						style={{ textDecoration: 'none' }}
					>
						<Button
							variant='contained'
							style={{ marginTop: '2rem' }}
							textTransform='uppercase'
						>
							Continue shopping
						</Button>
					</Link>
				</Box>}
			{productID.length &&
				<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography
						fontSize={32}
						sx={{ mb: '14px', mt: '85px' }}
						variant='h2'
					>
						Favorites
					</Typography>
				</Box>
			}
			{favorites.map((item) => {
				// <ProductCard
				// 	key={item._id}
				// 	_id={item._id}
				// 	image={'/' + item.imageUrls[0]}
				// 	title={item.product.name}
				// 	price={item.product.currentPrice}
				// />
				// eslint-disable-next-line no-console
				console.log('favorites--item', item)
			})}
		</Container>
	)
}

export default Favorites