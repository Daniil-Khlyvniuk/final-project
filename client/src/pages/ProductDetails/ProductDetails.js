import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsAPI from '../../utils/API/productsAPI'
// import ProductDescription from '../../components/ProductDescription/ProductDescription'
import {  Container , Grid , Alert} from '@mui/material'
import {useDispatch} from 'react-redux'
import {activeProductOperations} from '../../store/ActiveProduct'

const ProductDetails = () => {

	const { id } = useParams()
	const [data, setData] = useState({})
	const dispatch = useDispatch()
	const getProductData = async (id) => {
		if (id.length === 0) return

		const res = await productsAPI.getOneProduct(id)
		setData(res.data)
	}

	useEffect(() => {
		getProductData(id)
		dispatch(activeProductOperations.fetchActiveProduct(id))
	}, [id])

	if (Object.keys(data).length === 0) {
		return <Alert severity='error'>Product not found</Alert>
	}

	// eslint-disable-next-line no-console
	console.log(data)
	return (
		<Container maxWidth="lg">
			<h1>ProductDetails</h1>
			<Grid container spacing={2} >
				<Grid item md={6} xs={12}>Img</Grid>
				{/*<Grid item md={6} xs={12}>*/}
				{/*	/!*props data={data}-/product/variant*!/*/}
				{/*	<ProductDescription data={data}/>*/}
				{/*</Grid>*/}
			</Grid>


		</Container>
	)
}

export default ProductDetails
