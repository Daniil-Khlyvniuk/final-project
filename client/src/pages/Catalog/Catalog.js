import React, {useEffect} from 'react'
import {Container, Grid, Typography} from '@mui/material'
import ProductsCatalog from '../../components/Catalog/Catalog'
import CategorySearch from '../../components/Catalog/CategorySearch'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'
import { textStyle, useStyles } from './styles'
// eslint-disable-next-line no-unused-vars
import {filterSelectors, filterOperations} from '../../store/Filter'
import {useHistory} from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import {useSelector, useDispatch} from 'react-redux'
import queryString from 'query-string'
// import Box from '@mui/material/Box'

const Catalog = () => {
	const filterStore = useSelector(filterSelectors.getFilters())
	const history = useHistory()
	const classes = useStyles()
	// const urlParams = queryString.parse(history.location.search,{arrayFormat: 'comma'})
	// const dispatch = useDispatch()

	//build query string on filters change
	const buildQueryString = () => {
		history.push({
			pathname: history.location.pathname,
			search: `?${queryString.stringify(filterStore,{arrayFormat: 'comma'})}`,
		})
	}
	useEffect(() => {
		buildQueryString(history)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[filterStore])

	// useEffect(() => {
	// 	dispatch(filterOperations.setFiltersFromUri(urlParams))
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// },[])


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
