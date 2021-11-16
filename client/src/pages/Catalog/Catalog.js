import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ProductsCatalog from '../../components/Catalog/Catalog'
import Typography from '@mui/material/Typography'
import theme from '../../utils/Theme'
import { ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

const textStyle = {
	color: '#373F41',
	fontSize: '32px',
	display: 'flex',
	justifyContent: 'center',
	margin: '50px auto',
}

const headSearch = {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '50px auto',
	maxWidth: '880px',
}


export default function Catalog() {
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
						</Grid>
						<Grid item xs={9}>
							<Grid style={headSearch} item xs={12}>
								<Button
									to='/'
									component={RouterLink}
									color="primary"
									variant="outlined"
								>SHOP ALL
								</Button>
								<Button
									to='/'
									component={RouterLink}
									color="primary"
									variant="outlined"
								>BEDROOM
								</Button>
								<Button
									to='/'
									component={RouterLink}
									color="primary"
									variant="outlined"
								>BED LINEN
								</Button>
								<Button
									to='/'
									component={RouterLink}
									color="primary"
									variant="outlined"
								>KITCHEN
								</Button>
								<Button
									to='/'
									component={RouterLink}
									color="primary"
									variant="outlined"
								>BATHROOM
								</Button>
								<Button
									to='/'
									component={RouterLink}
									color="primary"
									variant="outlined"
								>LOUNGEWEAR
								</Button>
								<Button
									to='/'
									component={RouterLink}
									color="primary"
									variant="outlined"
								>SALE
								</Button>
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
// export default Catalog
