import { Container, Grid } from '@mui/material'
import queryString from 'query-string'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import BackdropLoader from '../../components/UI/BackdropLoader/BackdropLoader'
import Loader from '../../components/UI/Loader/Loader'
import productActions, { productsSelectors } from '../../store/products'
import filterApi from '../../utils/API/filterApi'
import productsAPI from '../../utils/API/productsAPI'
import UseSeo from '../../utils/customHooks/useSeo'
import UseSnack from '../../utils/customHooks/useSnack'
import MatchedProductsTitle from './SearchComponent/MatchedProductsTitle'


const Search = () => {
	const [ perPageArray, setPerPageArray ] = useState([])
	const [ perPage, setPerPage ] = useState(5)
	const [ , setStartPage ] = useState(1)
	const [ hasMore, setHasMore ] = useState(true)
	const products = useSelector(productsSelectors.getProducts())
	const isLoading = useSelector(productsSelectors.getIsLoading())
	const dispatch = useDispatch()
	let location = useLocation()
	const { search_term } = queryString.parse(location.search)
	const title = search_term ? `Search by word ${ search_term }` : 'Search Page'
	const description = search_term ? `Search products by word ${ search_term }` : 'Search products'
	const keywords = search_term
		? `${ search_term }, ${ 'search products' }, search products by word ${ search_term }`
		: null

	const matchedProducts = products?.map(item => (
		<Grid item md={ 6 } sm={ 6 } xs={ 12 } key={ item.variants._id }>
			<ProductCard
				_id={ item.variants._id }
				sx={ { width: { sm: '580px' }, height: { sm: '545px' } } }
				image={ '/' + item.variants.imageUrls[0] }
				title={ item.name }
				price={ item.variants.currentPrice }
			/>
		</Grid>
	))
	const { handleSnack } = UseSnack()

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
						} else {
							dispatch(productActions.setAllProducts([]))
						}
						if (data.length < perPage) {
							setHasMore(false)
						}
					}).catch(err => {
						handleSnack({ message: err, style: 'warning' })
						dispatch(productActions.setAllProducts([]))
					})
			} else {
				dispatch(productActions.setAllProducts([]))
			}
			return defPage
		}
		)
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
							if (data.length < perPage) setHasMore(false)
							dispatch(productActions.addProductsToStore(data))
						} else {
							setHasMore(false)
						}
					})
					.catch((err) => {
						setHasMore(true)
						handleSnack({
							message: err,
							style: 'warning'
						}
						)
						dispatch(productActions.setAllProducts([]))
					})
			} else {
				setHasMore(true)
				dispatch(productActions.setAllProducts([]))
			}
			return nextPage
		})
	}

	useEffect(() => {
		filterApi.getFiltersByType('perPage')
			.then(resp => setPerPageArray(resp.data))
			.catch(err => handleSnack({ message: err, style: 'warning' }))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		newProductsHandler()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ perPage ])

	return (
		<>
			<UseSeo
				title={ title }
				description={ description }
				keywords={ keywords }
			/>
			<Container maxWidth="lg" sx={ { minWidth: 320 } }>
				{
					isLoading
					&&
					<BackdropLoader open={ isLoading } />
				}
				<MatchedProductsTitle
					search_term={ search_term }
					perPageArray={ perPageArray }
					perPage={ perPage }
					setPerPage={ setPerPage }
					isAnyMatched={ !!products.length } />
				<InfiniteScroll
					style={ {
						display: 'flex',
						justifyContent: 'flex-start',
						gap: '10px',
						alignItems: 'center',
						flexWrap: 'wrap',
						overflow: 'visible',
						margin: '15px 0 0 0'
					} }
					dataLength={ products.length }
					next={ scrollProductsHandler }
					hasMore={ hasMore }
					loader={ hasMore ? <Loader /> : null }
				>
					<Grid container spacing={ 2 } sx={ { marginBottom: '40px' } }>
						{ matchedProducts }
					</Grid>
				</InfiniteScroll>
			</Container>
		</>
	)
}

export default Search