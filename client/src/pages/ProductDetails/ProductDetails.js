import React from 'react'
import { Container } from '@mui/material'
import ProductDescription from '../../components/ProductDescription/ProductDescription'

const ProductDetails = () => {
	return (
		<Container maxWidth="lg">
			<h1>ProductDetails</h1>
			<ProductDescription/>
		</Container>
	)
}

export default ProductDetails
