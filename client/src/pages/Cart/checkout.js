import React from 'react'
import { Container, Grid, Box} from '@mui/material'
import { border, PayParent } from './styles'
import PayCc from '../../components/PayCard/Steps/PayCC'
import ShipAdr from '../../components/PayCard/Steps/ShipAdr'
import Summary from '../../components/PayCard/Summary'

const Checkout = () => {
	return (
		<Box my='15px'>
			<Grid container style={PayParent} spacing={2}>
				<Grid item xs={8}>
					<Box>
						<Grid container>
							<Grid item xs={12}>
								<Container maxWidth="md">
									<ShipAdr/>
									<div style={border}/>
									<Grid item xs={12}>
										<PayCc/>
									</Grid>
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

export default Checkout