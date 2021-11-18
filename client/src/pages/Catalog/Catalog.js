import React, {useEffect} from 'react'
import {Container, Grid, Typography} from '@mui/material'
import ProductsCatalog from '../../components/Catalog/Catalog'
import CatalogSearch from '../../components/Catalog/CatalogSearch'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'
import { textStyle } from './styles'

import {filterSelectors,filterOperations} from '../../store/Filter'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import queryString from 'query-string'

// import productsAPI from '../../utils/API/productsAPI'

const Catalog = () => {
	const history = useHistory()
	const filters = useSelector(filterSelectors.getFilters())
	const dispatch = useDispatch()
	const incomeQuery = queryString.parse(history.location.search, {arrayFormat: 'comma'})

	const makeSearchQueryString = () => {
		const res = []
		for (let key in filters)
		{
			if(filters[key].length)
			{
				res.push(`${key}=${filters[key].join(',')}`)
			}
		} 
		return res.join('&')
	}
	// const getProducts = async (queryString) => {
	// 	const productsRes = await productsAPI.getFilteredProducts(queryString)
	// 	console.log('productsRes',productsRes)
	// }

	useEffect(() => {
		dispatch(filterOperations.setFiltersFromQueryString(incomeQuery))
	}, [dispatch])

	useEffect(() => {
	
		let newQueryString = makeSearchQueryString()
		if(newQueryString)
		{
			newQueryString = `?${makeSearchQueryString()}`
			history.push({
				pathname: '/shop/catalog',
				search: `${newQueryString}`
			})
			
			// getProducts(newQueryString)
		}
	

	}, [filters,history])

	return (
		<Container maxWidth="lg">
			<Grid container spacing={2} >
				<Grid item xs={3}>
					<Typography
						style={textStyle}
						variant={'h2'}
					>
						Catalog
					</Typography>
					<LeftSide />
				</Grid>
				<Grid item xs={9}>
					<CatalogSearch />
					<Grid item xs={12}>
						<HeadSearch />
					</Grid>
					<Grid item xs={12}>
						<ProductsCatalog />
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Catalog
