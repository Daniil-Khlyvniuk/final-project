import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import productActions, { ProductOperations, ProductSelector } from '../../store/Product'
import { Container, Grid, Box, Typography, styled } from '@mui/material'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import Carousel from '../../components/Carousel/Carousel'
import RelatedItemsList from '../../components/RelatedItems/RelatedItemsList'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import UseCeo from '../../utils/customHooks/useCeo'
import { favoritesOperations } from '../../store/Favorites'

const ProductDetails = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const [isLoading , setIsLoading] = useState(false)
	// const isLoading = useSelector(ProductSelector.isLoading())
	const activeProduct = useSelector(ProductSelector.getProduct())
	const parent = useSelector(ProductSelector.getParent())
	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	const StyledTypography = styled(Typography)(() => ({
		fontSize: '32px',
		textTransform: 'uppercase',
		fontWeight: 400,
		margin: 'auto',
		alignSelf: 'center',
	}))
	
	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('LOADDDINNNNGGG FAV')
		favoritesOperations.fetchFavorites(favorites)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favorites.length])

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('LOADDDINNNNGGG ID')
		dispatch(ProductOperations.fetchProductUrl(id))

		return function cleanup(){
			dispatch(productActions.clearActiveProduct())
		}
	}, [id, dispatch])

	useEffect(() => {
		setIsLoading(true)
		// eslint-disable-next-line no-console
		console.log('LOADDDINNNNGGG PARENT')
		if (activeProduct) {
			dispatch(ProductOperations.fetchAllColors(parent._id))
			dispatch(ProductOperations.fetchSizes({
				colorId: activeProduct.color,
				productId: parent._id
			}))
			dispatch(ProductOperations.fetchAllVariants(parent._id))

		}
		setIsLoading(false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeProduct])

	// if (isLoading) {
	//
	// 	return <BackdropLoader open={isLoading}/>
	// }

	if(!activeProduct){
		return <StyledTypography>Product not found</StyledTypography>
	}

	return (
		<>
			<UseCeo 
				title = {parent ? parent.name : 'Product Details'}
				description = {parent ? parent.description : 'Product details'}
				keywords = {
					parent 
						? `${parent.name}, ${parent.manufacturer},  ${parent.brand}, 
						${parent.seller}, ${parent.manufacturerCountry}` 
						: null
				}
			/>
			<Container maxWidth="lg" sx={{ mt: '80px' }}>

				{isLoading &&  <BackdropLoader open={isLoading}/>}
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
