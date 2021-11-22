import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import queryString from 'query-string'
import {filterSelectors, filterOperations} from '../../store/Filter'
import {productsOperations} from '../../store/Products'
import { textStyle, useStyles } from './styles'

import {Container, Grid, Typography} from '@mui/material'
import ProductsCatalog from '../../components/Catalog/Catalog'
import CategorySearch from '../../components/Catalog/CategorySearch'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'

const Catalog = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const classes = useStyles()

	const filterStore = useSelector(filterSelectors.getFilters())
	const urlParams = queryString.parse(history.location.search,{arrayFormat: 'comma'})
	
	let newQueryString = null
	//запрос по фильтру
	let timer
	const getPorductsByFilter = (filterString) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			dispatch(productsOperations.fetchProductsByFilter(filterString))
		},1000)
	}

	//build query string on filters change
	const buildQueryString = () => {
		newQueryString = queryString.stringify(filterStore,{arrayFormat: 'comma'})
		history.push({
			pathname: history.location.pathname,
			search: newQueryString,
		})
		getPorductsByFilter(newQueryString)
	}

	useEffect(() => {
		buildQueryString()
	},[filterStore])

	//parse url on first page loading
	useEffect(() => {
		dispatch(filterOperations.setFiltersFromUri(urlParams))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	// eslint-disable-next-line no-console
	// console.log('urlParams',urlParams)


	return (
		<Container maxWidth="lg">
			<Grid  className={classes.MainGrd}>
				<Grid item className={classes.leftSide}>
					<Typography
						style={textStyle}
						variant={'h2'}
					>
						Catalog
					</Typography>
					<LeftSide />
				</Grid>
				<Grid item className={classes.rightSide}>
					<CategorySearch />
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
