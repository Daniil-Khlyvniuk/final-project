import React, { useEffect, useState } from 'react'
import { Container, Box, Grid, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import productActions, { productsSelectors } from '../../store/Products'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import productsAPI from '../../utils/API/productsAPI'
import filterApi from '../../utils/API/filterApi'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import ProductCard from '../../components/ProductCard/ProductCard'
import DropDownSelect from '../../components/Catalog/DropDownSelect'
import Loader from '../../components/UI/Loader/Loader'
import InfiniteScroll from 'react-infinite-scroll-component'
import UseSeo from '../../utils/customHooks/useHelmet'

const Search = () => {
	const [perPageArray, setPerPageArray] = useState([])
	const [perPage, setPerPage] = useState(5)
	// eslint-disable-next-line no-unused-vars
	const [startPage, setStartPage] = useState(1)
	const [hasMore, setHasMore] = useState(true)
	const products = useSelector(productsSelectors.getProducts())
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const dispatch = useDispatch()
	let location = useLocation()
	const { search_term } = queryString.parse(location.search)

	const newProductsHandler = () => {
		setHasMore(true)
		setStartPage(() => {
			const defPage = 1

			if (search_term) {
				productsAPI.searchForProducts(
					{ query: search_term, perPage, startPage: defPage }
				)
					.then(({ data }) => {
						if (data.length > 0) {
							dispatch(productActions.setAllProducts(data))
						}
						else {
							dispatch(productActions.setAllProducts([]))
						}
						if (data.length < perPage) {
							setHasMore(false)
						}
					})
					.catch(err => {
						// eslint-disable-next-line no-console
						console.error(err)
						dispatch(productActions.setAllProducts([]))
					})
			}
			else {
				dispatch(productActions.setAllProducts([]))
			}
			return defPage
		})
	}

	const scrollProductsHandler = () => {
		setStartPage(prev => {
			const nextPage = ++prev
			if (search_term) {
				productsAPI.searchForProducts(
					{ query: search_term, perPage, startPage: nextPage }
				)
					.then(({ data }) => {
						if (data.length) {
							// setHasMore(true)
							if (data.length < perPage) setHasMore(false)
							dispatch(productActions.addProductsToStore(data))
						}
						else {
							setHasMore(false)
						}
					})
					.catch(err => {
						setHasMore(true)
						// eslint-disable-next-line no-console
						console.error(err)
						dispatch(productActions.setAllProducts([]))
					})
			}
			else {
				setHasMore(true)
				dispatch(productActions.setAllProducts([]))
			}
			return nextPage
		})
	}

	useEffect(() => {
		filterApi.getFiltersByType('perPage')
			.then(resp => setPerPageArray(resp.data))
			// eslint-disable-next-line no-console
			.catch(err => console.log('Search Err', err))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		newProductsHandler()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [perPage])

	return (
		<>
			<UseSeo 
				title = {search_term ? `Search by word ${search_term}` : 'Search Page'}
				description = {search_term ?  `Search products by word ${search_term}` : 'Search products'}
				keywords = {
					search_term 
						? `${search_term}, ${'search products'}, search products by word ${search_term}` 
						: null
				}
			/>
			<Container maxWidth="lg" sx={{ minWidth: 320 }}>
				{isLoading && <BackdropLoader open={isLoading} />}
				{!products.length
					? <Typography
						sx={{ mb: '14px', mt: '30px', fontSize: { md: 32, xs: 25 } }}
						variant='h2'
					>
					No products found
					</Typography>
					: <Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							mb: '14px',
							mt: '30px'
						}}>
						<Typography
							variant='h2'
							sx={{ fontSize: { md: 32, xs: 25 } }}
						>
							{`Search results for "${search_term}"`}
						</Typography>
						{perPageArray.length && (
							<DropDownSelect
								arrayToIterate={perPageArray}
								selectedValue={perPage}
								selectHandler={setPerPage}
								label={'Show'}
							/>
						)}
					</Box>
				}
				<InfiniteScroll
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						gap: '10px',
						alignItems: 'center',
						flexWrap: 'wrap',
						overflow: 'visible',
						margin: '15px 0 0 0',
					}}
					dataLength={products.length}
					next={scrollProductsHandler}
					hasMore={hasMore}
					loader={hasMore ? <Loader /> : null}
				>
					<Grid container spacing={2} sx={{ marginBottom: '40px' }} >
						{products?.map(item => (
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
				</InfiniteScroll>
			</Container >
		</>
	)
}

export default Search