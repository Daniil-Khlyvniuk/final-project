import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ProductsCatalog from '../../components/Catalog/Catalog'
import theme from '../../utils/Theme'
import { ThemeProvider } from '@mui/material/styles'
import HeadButton from '../../components/Catalog/HeadButton'
import HeadSearch from '../../components/Catalog/HeadSearch'
import LeftSide from '../../components/Catalog/LeftSide'
import Typography from '@mui/material/Typography'
import { textStyle } from './styles'

const Catalog = () => {

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<Typography
								style={textStyle}
								variant={'h2'}>
								CATALOG
							</Typography>
							<LeftSide />
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

export default Catalog
