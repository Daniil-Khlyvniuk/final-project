import React, { useEffect, useState } from 'react'
import { Container, Grid, Box} from '@mui/material'
import axios from 'axios'
import { border } from './styles'
import PayCc from '../../components/PayCard/PayCC'
import ShipAdr from '../../components/PayCard/ShipAdr'
import Summary from '../../components/PayCard/Summary'




const Checkout = () => {
	// eslint-disable-next-line no-unused-vars
	const [userData, setUserData] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		axios('/api/customers/customer')
			.then(res =>setUserData(res.data))
		setIsLoading(false)
	}, [isLoading])






	return (
		<Box my='15px'>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Box>
						<Grid container>
							<Grid item xs={12}>
								<Container maxWidth="md">
									<ShipAdr />
									<div style={border} />
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