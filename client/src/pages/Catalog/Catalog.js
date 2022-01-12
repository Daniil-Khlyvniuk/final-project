import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ProductsCatalog from '../../components/Catalog/Catalog'
import CategorySearch from '../../components/Catalog/CategorySearch'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'
import UseSeo from '../../utils/customHooks/useSeo'
import { textStyle, useStyles } from './styles'


const Catalog = () => {
	const { onLoadingPage, restoreDefaults } = useFilterHandler()
	const classes = useStyles()

	useEffect(() => {
		window.scrollTo(0, 0)
	},
	[])

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
