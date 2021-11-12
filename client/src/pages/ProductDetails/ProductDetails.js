import React from 'react'
// import { useParams } from 'react-router-dom'
// import productsAPI from '../../utils/API/productsAPI'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import {  Container } from '@mui/material'

const ProductDetails = () => {
	// const { id } = useParams()
	// const [data, setData] = useState({})
	//
	// const getProductData = async (id) => {
	// 	// if (id.length === 0) return
	//
	// 	const res = await productsAPI.getOneProduct(id)
	// 	setData(res.data)
	// }
	//
	// useEffect(() => {
	// 	getProductData(id)
	// }, [id])
	//
	// if (Object.keys(data).length === 0) {
	// 	return <Alert severity='error'>Product not found</Alert>
	// }
	//
	// // eslint-disable-next-line no-console
	// console.log(data)
	return (
		<Container maxWidth="lg">
			<h1>ProductDetails</h1>

			{/*props data={data}-/product/variant*/}
			<ProductDescription/>
		</Container>
	)
}

export default ProductDetails
