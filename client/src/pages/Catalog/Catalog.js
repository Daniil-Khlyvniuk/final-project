import React, {useEffect} from 'react'
import {textStyle, useStyles} from './styles'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'

import {Container, Grid, Typography} from '@mui/material'
import ProductsCatalog from '../../components/Catalog/Catalog'
import CategorySearch from '../../components/Catalog/CategorySearch'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'

const Catalog = () => {
	// eslint-disable-next-line no-unused-vars
	const [_,onLoadingPage] = useFilterHandler()
	const classes = useStyles()
	
	//parse url on first page loading
	useEffect(() => {
		onLoadingPage()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
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
	)
}

export default Catalog
