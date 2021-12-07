import React, { useEffect, useState } from 'react'
import { Container, Grid, Box} from '@mui/material'
import axios from 'axios'
import { PayParent } from './styles'
import PayCc from './PayCC'
import Summary from './Summary'

// eslint-disable-next-line react/prop-types
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

	console.log(userData)

	return (
		<Box my='15px'>
			<Grid container style={PayParent} spacing={2}>
				<Grid item xs={8}>
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
				<Grid item xs={4}>
					<Summary/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Checkout