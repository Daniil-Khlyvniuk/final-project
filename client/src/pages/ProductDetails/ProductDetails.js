import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProductOperations, ProductSelector } from '../../store/Product'
import { Container, Grid, Box } from '@mui/material'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import Carousel from '../../components/Carousel/Carousel'
import RelatedItemsList from '../../components/RelatedItems/RelatedItemsList'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import UseSeo from '../../utils/customHooks/useSeo'
import { favoritesOperations } from '../../store/Favorites'
import { StyledTypography } from './styles'

const ProductDetails = () => {
	const { id } = useParams()
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

	if (isLoading) {
		return <BackdropLoader open={isLoading} />
	}

	return (
		<>
			<UseSeo
				title={parent ? parent.name : 'Product Details'}
				description={parent ? parent.description : 'Product details'}
				keywords={
					parent
						? `${parent.name}, ${parent.manufacturer},  ${parent.brand}, 
						${parent.seller}, ${parent.manufacturerCountry}`
						: null
				}
			/>
			<Container maxWidth="lg" sx={{ mt: '80px' }}>
				{!activeProduct && (
					<StyledTypography>Product not found</StyledTypography>
				)}
				{activeProduct && <><Grid container spacing={4}>
					<Grid item md={6} xs={12}>
						<Carousel slides={activeProduct.imageUrls} product={true} />
					</Grid>
					<Grid item md={6} xs={12}>
						<ProductDescription />
					</Grid>
				</Grid>
				<Box style={{ marginTop: '80px' }}>
					<RelatedItemsList />
				</Box>
				</>
				}
			</Container>
		</>
	)

}

export default ProductDetails
