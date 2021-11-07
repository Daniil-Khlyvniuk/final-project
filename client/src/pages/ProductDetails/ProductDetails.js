import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsAPI from '../../utils/API/productsAPI'

const ProductDetails = () => {
	const { id } = useParams()
	const [data, setData] = useState({})

	const getProductData = async (id) => {
		if (id.length === 0) return

		const res = await productsAPI.getOneProduct(id)
		setData(res.data)
	}

	useEffect(() => {
		getProductData(id)
	}, [id])

	if (Object.keys(data).length === 0) {
		return <Alert severity='error'>Product not found</Alert>
	} 

	return (
		<div>
			<h1>ProductDetails</h1>
		</div>
	)
}

export default ProductDetails
