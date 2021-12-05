import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProductOperations, ProductSelector } from '../../store/Product'
import { Alert, Container, Grid, Box } from '@mui/material'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import Carousel from '../../components/Carousel/Carousel'
import RelatedItemsList from '../../components/RelatedItems/RelatedItemsList'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import { Helmet } from 'react-helmet-async'
import { favoritesOperations } from '../../store/Favorites'

const ProductDetails = () => {
	const { id } = useParams()
	console.log('prod id',id)
	const dispatch = useDispatch()
	const isLoading = useSelector(ProductSelector.isLoading())
	const activeProduct = useSelector(ProductSelector.getProduct())
	const parent = useSelector(ProductSelector.getParent())
	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	useEffect(() => {
		favoritesOperations.fetchFavorites(favorites)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favorites.length])

	useEffect(() => {
		dispatch(ProductOperations.fetchProductUrl(id))
	}, [id, dispatch])

	useEffect(() => {
		if (activeProduct) {
			dispatch(ProductOperations.fetchAllColors(parent._id))
			dispatch(ProductOperations.fetchSizes({
				colorId: activeProduct.color,
				productId: parent._id
			}))
			dispatch(ProductOperations.fetchAllVariants(parent._id))

		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeProduct])

	if (!activeProduct) {
		return <Alert severity="error">Product not found</Alert>
	}

	return (
		<>
			<Helmet>
				<html lang="en"/>
				<title>{parent ? parent.name : 'Product Details'}</title>
				<meta name="description" content="Cotton Bed Linen"/>
				<meta name="keywords"
					content="bed linen, Cotton bed linen, Cotton Dark Blue Bed Linen, bedspreads queen, queen size sheets, cotton comforter, king size bedspreads"/>
			</Helmet>
			<Container maxWidth="lg" sx={{ mt: '80px' }}>
				{isLoading && <BackdropLoader open={isLoading}/>}
				{activeProduct && <><Grid container spacing={4}>
					<Grid item md={6} xs={12}>
						<Carousel slides={activeProduct.imageUrls} product={true}/>
					</Grid>
					<Grid item md={6} xs={12}>
						<ProductDescription/>
					</Grid>
				</Grid>
				<Box style={{marginTop: '80px'}}>
					<RelatedItemsList/>
				</Box>
				</>
				}
			</Container>
		</>
	)

}

export default ProductDetails
