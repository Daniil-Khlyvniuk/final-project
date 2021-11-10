import React, {useEffect, useState} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import {Box, Grid, Typography, Button} from '@mui/material'

import {getSubscriptionByEmail,changeSubscription} from '../../utils/API/subscribersAPI'

import { styled } from '@mui/material/styles'

const StyledTypography = styled(Typography)(() => ({
	fontSize: '32px',
	textTransform: 'uppercase',
	letterSpacing: '5px',
	fontWeight: 400,
}))

const HandleSubscribe = () => 
{
	const {email} = useParams()
	const history = useHistory()
	const [subscribeStatus, setSubscribeStatus] = useState(null)
	const handleSubscription = async (email) => {
		try{
			const getSubscriptionInfo = await getSubscriptionByEmail(email)
			if(getSubscriptionInfo.status === 200)
			{
				const status = !getSubscriptionInfo.data.enabled
				const changeRes = await changeSubscription({email, enabled: status})
				if(changeRes.status === 200)
				{
					status === true 
						? setSubscribeStatus({ status: 'You successfully subscribed!' }) 
						: setSubscribeStatus({ status: 'You successfully unsubscribed!' })
				}
			}
		}
		catch(er)
		{
			setSubscribeStatus({ status: er.response.data.message })
		}
	}

	useEffect( () => handleSubscription(email),[email])

	if(!email || !email.trim().length)
	{
		history.push('/')
	}

	return (
		<Box maxWidth='lg' sx={{minHeight: '500px'}}>
			<Grid
				container
				spacing={5}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '500px' }}>
				<Grid xs={6} item>
				
					{subscribeStatus && subscribeStatus.status && (
						<StyledTypography variant="h2">{subscribeStatus.status}</StyledTypography>
					)}
					
				</Grid>
				<Grid xs={6} item>
					<Button variant="contained" to="/" component={Link}>to main page</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default HandleSubscribe
