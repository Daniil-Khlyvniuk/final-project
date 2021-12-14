import React, { useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import productActions, { ProductOperations, ProductSelector } from '../../store/Product'
import {Container, Grid, Box, Typography, styled} from '@mui/material'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import Carousel from '../../components/Carousel/Carousel'
import RelatedItemsList from '../../components/RelatedItems/RelatedItemsList'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import { favoritesOperations } from '../../store/Favorites'

const ProductDetails = () => {
	const { id } = useParams()
	const dispatch = useDispatch()

	const isLoading = useSelector(ProductSelector.isLoading())
	const activeProduct = useSelector(ProductSelector.getProduct())

	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	const StyledTypography = styled(Typography)(() => ({
		fontSize: '32px',
		textTransform: 'uppercase',
		fontWeight: 400,
		margin: 'auto',
		alignSelf: 'center',
	}))
	
	useEffect(() => {
		favoritesOperations.fetchFavorites(favorites)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favorites.length])

	useEffect(() => {
		dispatch(ProductOperations.fetchProductUrl(id))
			.then((res) => {
				dispatch(ProductOperations.fetchAllColors(res.payload._id))
				dispatch(ProductOperations.fetchSizes({
					colorId: res.payload.variants.color,
					productId: res.payload._id
				}))
				dispatch(ProductOperations.fetchAllVariants(res.payload._id))

			})

		return function cleanup(){
			dispatch(productActions.clearActiveProduct())
		}
	}, [id, dispatch])




	if(isLoading){
		return (
			<Container
				sx={{width:'100%', height:'1200px'}}>
				<BackdropLoader open={isLoading}/>
			</Container>
		)
	}

	if(!activeProduct){
		return <StyledTypography>Product not found</StyledTypography>
	}

	return (
		<Container maxWidth="lg" sx={{ mt: '80px' }}>
			{activeProduct && <>
				<Grid container spacing={4}>
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
	)

}

export default ProductDetails
