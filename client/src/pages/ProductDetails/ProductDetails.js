import React, {useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import  {ProductOperations, ProductSelector} from '../../store/Product'
import {Alert, Backdrop, CircularProgress, Container, Grid} from '@mui/material'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import Carousel from '../../components/Carousel/Carousel'
import RelatedItemsList from '../../components/RelatedItems/RelatedItemsList'

const ProductDetails = () => {

	const { id } = useParams()
	const dispatch = useDispatch()

	const isLoading = useSelector(ProductSelector.isLoading())
	const activeProduct = useSelector(ProductSelector.getProduct())
	const parent = useSelector(ProductSelector.getParent())


	useEffect(() => {
		dispatch(ProductOperations.fetchProductUrl(id))
	}, [id, dispatch])

	useEffect(() => {
		if(activeProduct){
			dispatch(ProductOperations.fetchAllColors(parent._id))
			dispatch(ProductOperations.fetchSizes({
				colorId: activeProduct.color._id,
				productId: activeProduct.product._id}))
			dispatch(ProductOperations.fetchAllVariants(parent.variants))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeProduct, dispatch])



	if (!activeProduct ) {
		return <Alert severity='error'>Product not found</Alert>
	}
	
	return (
		<Container maxWidth='lg' sx={{mt:'80px'}}>
			{isLoading && (
				<Backdrop
					sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={isLoading}>
					<CircularProgress color="inherit" />
				</Backdrop>)}
			{activeProduct && <Grid container spacing={2}>
				<Grid item md={6} xs={12} >
					<Carousel slides={activeProduct.imageUrls} product={true} />
				</Grid>
				<Grid item md={6} xs={12}>
					<ProductDescription />
				</Grid>
				<Grid sx={{mt:'80px'}} item md={12}>
					<RelatedItemsList />
				</Grid>
			</Grid>}
		</Container>
	)

}
	
export default ProductDetails
