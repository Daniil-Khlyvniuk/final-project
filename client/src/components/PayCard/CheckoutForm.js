import React from 'react'
import { Container, Grid, Box} from '@mui/material'

import { border, PayParent } from './styles'
import ShipAdr from '../../components/PayCard/ShipAdr'
import Summary from '../../components/PayCard/Summary'


// eslint-disable-next-line react/prop-types
const CheckoutForm = ({handleNext}) => {

	return (
		<Box my='15px'>
			<Grid container style={PayParent} spacing={2}>
				<Grid item xs={8}>
					<Box>
						<Grid container>
							<Grid item xs={12}>
								<Container maxWidth="md">
									<ShipAdr handleNext={handleNext}/>
									<Box style={border}/>
								</Container>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Summary/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default CheckoutForm