import React from 'react'
import { Container, Grid, Box} from '@mui/material'
import ShipAdr from './Steps/ShipAdr'
import Summary from './Summary'
import PropTypes from 'prop-types'



const CheckoutForm = ({handleNext, handleBack}) => {
	return (
		<Box my='15px'>
			<Grid container 
				sx={{
					flexDirection: {lg: 'row', sm: 'column', xs: 'column',}
				}}
				spacing={2}>
				<Grid item xs={12} sm={12} lg={8}>
					<Box>
						<Grid container>
							<Grid item xs={12}>
								<Container maxWidth="md">
									<ShipAdr handleBack={handleBack} handleNext={handleNext}/>
								</Container>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={12} lg={4} sm={12}
					sx={{
						['@media(max-width: 1180px)']: {
							display: 'flex',
							justifyContent: 'center',
						}
					}}>
					<Summary/>
				</Grid>
			</Grid>
		</Box>
	)
}

CheckoutForm.propTypes = {
	handleNext: PropTypes.func,
	handleBack: PropTypes.func,
}

export default CheckoutForm