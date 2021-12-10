import React from 'react'
import { Container, Grid, Box} from '@mui/material'
import { PayParent } from './styles'
import PayCc from './PayCC'
import Summary from './Summary'

// eslint-disable-next-line react/prop-types
const Checkout = () => {
	// eslint-disable-next-line no-unused-vars

	return (
		<Box my='15px'>
			<Grid container style={PayParent} spacing={2}>
				<Grid item xs={12} lg={8} sm={12}>
					<Box>
						<Grid container>
							<Grid item xs={12}>
								<Container maxWidth="md">
									<PayCc/>
								</Container>
							</Grid>
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={12} lg={4} sm={12}>
					<Summary/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Checkout