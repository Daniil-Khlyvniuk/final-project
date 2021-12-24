import React from 'react'
import {Container, Typography, Box} from '@mui/material'
import BasicTabs from '../../components/UserProfile/Tabs/Tabs'




const UserProfile = () => {
	return (
		<Container maxWidth={'lg'}>
			<Box sx={{py:5, mt:2.6}}>
				<Typography
					variant='h4'
					fontSize={'32px'}
					component={'div'}
				>
					My account
				</Typography>
				<Typography
					variant='body1'
					component={'div'}
					color='primary'
					fontSize='14px'
					textAlign='center'
					sx={{mt:'5px'}}
				>
					Hello, user!
					Here you can view your purchases,
					edit your details or manage your returns.
				</Typography>
			</Box>
			<Box

			>
				<BasicTabs/>
			</Box>
		</Container>
	)
}

export default UserProfile