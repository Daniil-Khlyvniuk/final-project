import { Container } from '@mui/material'
import ProductsCatalog from '../../components/Catalog/Catalog'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(4),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}))

export default function Catalog() {
	return (
		<Container maxWidth="lg">
			<Box sx={{ flexGrow: 3 }} columns={2}>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<Item>xs=8</Item>
					</Grid>
					<Grid item xs={9}>
						<Item>xs=4</Item>
					</Grid>
					<Grid item xs={9}>
						<Item>
							<ProductsCatalog />
						</Item>
					</Grid>
				</Grid>
			</Box>
		</Container>
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
