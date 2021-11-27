import React from 'react'
import {Container, Typography, Box} from '@mui/material'
import BasicTabs from '../../components/UserProfile/Tabs/Tabs'

const UserProfile = () => {
	return (
		<Container>
			<Box sx={{py:'40px', mt:'20px'}}>
				<Typography
					variant='h2'
					component={'div'}
					color='primary'
					fontSize='32px'
					textAlign='center'
					sx={{textTransform:'uppercase'}}
				>
					My account
				</Typography>
				<Typography
					variant='body1'
					component={'div'}
					color='primary'
					fontSize='12px'
					textAlign='center'
					sx={{mt:'5px'}}
				>
					Hello, user!
					Here you can view your purchases,
					edit your details or manage your returns.
				</Typography>
			</Box>
			<Box>
				<BasicTabs/>
			</Box>
		</Container>
	)
}

export default UserProfile