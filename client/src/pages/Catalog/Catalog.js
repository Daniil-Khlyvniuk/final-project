import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ProductsCatalog from '../../components/Catalog/Catalog'
import Typography from '@mui/material/Typography'
import theme from '../../utils/Theme'
import { ThemeProvider } from '@mui/material/styles'
import { textStyle } from './styles'
import HeadButton from '../../components/Catalog/HeadButton'
import HeadSearch from '../../components/Catalog/HeadSearch'
import PriceRange from '../../components/Catalog/PriceRange'
import SearchSize from '../../components/Catalog/SearchSize'


const Catalog = () => {

	return (
		<div>
			<ThemeProvider theme={theme}>
				<p></p>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<Typography
								style={textStyle}
								variant={'h2'}>
								CATALOG
							</Typography>
							<PriceRange />
							<SearchSize />
						</Grid>
						<Grid item xs={9}>
							<HeadButton />
							<Grid item xs={12}>
								<HeadSearch />
							</Grid>
							<Grid item xs={12}>
								<ProductsCatalog />
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		</div>
	)
}

// const Catalog = () => {
// 	return (
// 		<Container maxWidth="lg">
// 			<ProductsCatalog />
// 		</Container>
// 	)
// }
//
export default Catalog
