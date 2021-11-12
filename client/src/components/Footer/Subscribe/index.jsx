import React from 'react'
import { styled } from '@mui/material/styles'
import { Grid, List, ListItem, Typography, } from '@mui/material'

import SubscribeForm from '../../Form/SubscribeForm'
import SocialLinks from '../../SocialLInks'

const StyledListItem = styled(ListItem)(() => ({
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
}))



const Subscribe = () => {
	return (
		<Grid item xs={12} sm={6} lg={3}>
			<List>
				<ListItem
					sx={{
						justifyContent: {
							xs: 'center',
							lg: 'flex-start',
						}
					}}
				>
					<Typography
						variant="menuBold"
					
					>
						subscribe
					</Typography>
				</ListItem>
				<ListItem
					sx={{
						justifyContent: {
							xs: 'center',
							lg: 'flex-start',
						}
					}}
				>
					<Typography 
						variant='footerTextLight'
						sx={{
							textAlign: {
								xs: 'center',
								lg: 'left',
							}
						}}
					>
								Subscribe now and get 15% off
								on your first order
					</Typography>
				</ListItem>
				<StyledListItem>
					<SubscribeForm />
				</StyledListItem>
				<ListItem 
					sx={{
						flexWrap: 'wrap',
						justifyContent: {
							xs: 'center',
							lg: 'space-between',
						}
					}}
				>
					<Typography variant="menuBold" noWrap={true} align='left'>
						follow us
					</Typography>
					<SocialLinks />
				</ListItem>
			</List>
		</Grid>
	)
}

export default Subscribe
