import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Grid, Alert, Backdrop, CircularProgress} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import {activeProductOperations, activeProductSelector} from '../../store/ActiveProduct'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import Carousel from '../../components/Carousel/Carousel'

const ProductDetails = () => {

	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activeProductOperations.fetchActiveProduct(id))
	}, [id, dispatch])

	const isLoading = useSelector(activeProductSelector.isLoading())
	const activeProduct = useSelector(activeProductSelector.getActiveVariant())


	const parent = useSelector(activeProductSelector.getParent())

	useEffect(()=>{
		if(activeProduct && parent){
			dispatch(activeProductOperations.fetchSizes(parent._id))
			dispatch(activeProductOperations.fetchColors(parent._id))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[activeProduct])



	if (!activeProduct ) {
		return <Alert severity='error'>Product not found</Alert>
	}

	return (
		<Container maxWidth="lg">
			{isLoading && (
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={isLoading}>
					<CircularProgress color="inherit" />
				</Backdrop>)}
			{activeProduct && (
				<Grid sx={{mt:'80px'}} container spacing={2} >
					<Grid item md={6} xs={12}><Carousel  /></Grid>
					<Grid item md={6} xs={12}>
						{activeProduct && <ProductDescription />}
					</Grid>
					<Grid sx={{mt:'80px'}} item md={12}>Recently Viewed Products </Grid>
				</Grid>)}
		</Container>
	)
}

export default ProductDetails
