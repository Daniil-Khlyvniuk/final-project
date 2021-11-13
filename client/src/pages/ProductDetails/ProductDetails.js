import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import productsAPI from '../../utils/API/productsAPI'
// // import ProductDescription from '../../components/ProductDescription/ProductDescription'
import {  Container , Grid , Alert} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {activeProductOperations, activeProductSelector} from '../../store/ActiveProduct'
import ProductDescription from '../../components/ProductDescription/ProductDescription'

const ProductDetails = () => {

	const { id } = useParams()

	const dispatch = useDispatch()



	useEffect(() => {
		dispatch(activeProductOperations.fetchActiveProduct(id))

	}, [id, dispatch])

	const isLoading = useSelector(activeProductSelector.isLoading())
	const activeProduct = useSelector(activeProductSelector.getActiveVariant())

	// eslint-disable-next-line no-console


	useEffect(()=>{
		if(activeProduct){
			dispatch(activeProductOperations.fetchColors(activeProduct.product._id))
		}

	},[activeProduct])

	if (!activeProduct ) {
		return <Alert severity='error'>Product not found</Alert>
	}

	return (
		<Container maxWidth="lg">
			<h1>ProductDetails</h1>
			{isLoading && <p>Loading</p>}
			{activeProduct && <Grid container spacing={2} >
				<Grid item md={6} xs={12}>Img</Grid>
				<Grid item md={6} xs={12}>
					{/* eslint-disable-next-line max-len */}
					{activeProduct && <ProductDescription  activeProduct={activeProduct}/>}
				</Grid>
			</Grid>}



		</Container>
	)
}

export default ProductDetails
