import React, {useEffect} from 'react'
import {textStyle, useStyles} from './styles'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'

import {Container, Grid, Typography} from '@mui/material'
import ProductsCatalog from '../../components/Catalog/Catalog'
import CategorySearch from '../../components/Catalog/CategorySearch'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'
import { Helmet } from 'react-helmet-async'

const Catalog = () => {
	const {onLoadingPage, restoreDefaults} = useFilterHandler()
	const classes = useStyles()
	
	//parse url on first page loading
	useEffect(() => {
		onLoadingPage()

		return () => {
			//restore params to parse query string after return on page
			restoreDefaults()
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<>
			<Helmet>
				<html lang='en'/>
				<title>Catalog</title>
				<meta name='description' content='Catalog Bed Linens'/>
				<meta name='keywords' content='Bedroom, Bed linen, Kitchen, Bathroom, Loungewear, Towels, Blanket, Pillowcase, Sheet, Bathrobe, Sale bed linen ' />
			</Helmet>
			<Container maxWidth="lg">
				<Grid className={classes.MainGrd}>
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
		</>
	)
}

export default Catalog
