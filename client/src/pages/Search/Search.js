import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import setAllProducts, { productsSelectors } from '../../store/Products'
import { Box } from '@mui/system'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import { useLocation } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import queryString from 'query-string'
import productsAPI from '../../utils/API/productsAPI'
import DropDownSelect from '../../components/Catalog/DropDownSelect'
import filterApi from '../../utils/API/filterApi'

const Search = () => {
	const [perPageArray, setPerPageArray] = useState([])
	const [perPage, setPerPage] = useState(5)
	const products = useSelector(productsSelectors.getProducts())
	const [productsToShow, setProductsToShow] = useState([])
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const dispatch = useDispatch()
	let location = useLocation()
	const { search_term } = queryString.parse(location.search)

	const getPerPageFilters = async () => {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPageArray(pageRes.data)
	}

	const handlePerPage = (pageNumber) => {
		setPerPage(pageNumber)
	}

	const handleProductsToShow = () => {
		const start = productsToShow.length
		const number = perPage
		const newPart = products.slice(start, number)
		setProductsToShow([...productsToShow, ...newPart])
	}

	const productsHandler = () => {
		// eslint-disable-next-line no-console
		console.log(perPage)
		if (search_term) {
			try {
				productsAPI.searchForProducts(
					{ query: search_term }
				).then(({ data }) => {
					if (data.length > 0) {
						dispatch(setAllProducts.setAllProducts(data))
					}
					handleProductsToShow()
				})
			} catch (err) {
				// eslint-disable-next-line no-console
				console.error(err)
				dispatch(setAllProducts.setAllProducts([]))
			}
		}
		else {
			dispatch(setAllProducts.setAllProducts([]))
		}
	}

	const test = async () => {
		await getPerPageFilters()
		await productsHandler()
	}

	useEffect(() => {
		test()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(perPage)
		handleProductsToShow()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, search_term, perPage])


	return (
		<Container maxWidth="lg" sx={{ minWidth: 320 }}>
			{isLoading && <BackdropLoader open={isLoading} />}
			{!productsToShow.length
				? <Typography
					fontSize={32}
					sx={{ mb: '14px', mt: '30px' }}
					variant='h2'
				>
					No products found
				</Typography>
				: <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography
						fontSize={32}
						sx={{ mb: '14px', mt: '30px' }}
						variant='h2'
					>
						{`Search results for "${location.search.substr(location.search.lastIndexOf('=') + 1)}"`}
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 'auto' }}>
						{perPageArray.length && (
							<DropDownSelect
								arrayToIterate={perPageArray}
								selectedValue={perPage}
								selectHandler={handlePerPage}
								label={'Show'}
							/>
						)}
					</Box>
				</Box>
			}
			<Grid container spacing={2} sx={{ marginBottom: '40px' }} >
				{productsToShow?.map(item => (
					<Grid item md={6} sm={6} xs={12} key={item.variants._id}>
						<ProductCard
							_id={item.variants._id}
							sx={{ width: { sm: '580px' }, height: { sm: '545px' } }}
							image={'/' + item.variants.imageUrls[0]}
							title={item.name}
							price={item.variants.currentPrice}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Search