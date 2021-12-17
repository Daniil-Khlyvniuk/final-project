import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { filterSelectors } from '../../store/filter'
import { textStyle, useStyles } from './styles'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'

import { Container, Grid, Typography } from '@mui/material'
import ProductsCatalog from '../../components/Catalog/Catalog'
import CategorySearch from '../../components/Catalog/CategorySearch'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'
import UseSeo from '../../utils/customHooks/useSeo'


const Catalog = () => {
	const { onLoadingPage, restoreDefaults } = useFilterHandler()
	const classes = useStyles()
	const {
		color,
		size,
		minPrice,
		maxPrice // for scroll to top after choosing filter
	} = useSelector(filterSelectors.getFilters())


	useEffect(() => {
		window.scrollTo(0, 0)
	},
	[ color,
		size,
		minPrice,
		maxPrice ])


	//parse url on first page loading
	useEffect(() => {
		onLoadingPage()
		return () => {
			//restore params to parse query string after return on page
			restoreDefaults()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<UseSeo
				title={ 'Product Catalog Page' }
				description={ 'Product catalog' }
				keywords={ 'product catalog, postil catalog, bed linen catalog' }
			/>
			<Container maxWidth="lg">
				<Grid className={ classes.MainGrd }>
					<Grid item className={ classes.leftSide }>
						<Typography
							style={ textStyle }
							variant={ 'h2' }
						>
							Catalog
						</Typography>
						<LeftSide />
					</Grid>
					<Grid item className={ classes.rightSide }>
						<CategorySearch />
						<Grid item xs={ 12 }>
							<HeadSearch />
						</Grid>
						<Grid item xs={ 12 }>
							<ProductsCatalog />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Catalog
