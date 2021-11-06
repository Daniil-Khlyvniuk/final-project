import React from 'react'
import { styled } from '@mui/material/styles'
import { Grid, List, ListItem, Typography, } from '@mui/material'

import FormSubscribe from '../FormSubscribe'
import SocialLinks from '../../SocialLInks'

const StyledListItem = styled(ListItem)(() => ({
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
}))


const Subscribe = () => {
	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Typography
						variant="menuBold"
					>
						subscribe
					</Typography>
				</ListItem>
				<ListItem>
					<Typography variant='footerTextLight'>
								Subscribe now and get 15% off
								on your first order
					</Typography>
				</ListItem>
				<StyledListItem>
					<FormSubscribe />
				</StyledListItem>
				<ListItem>
					<Typography variant="menuBold">
						follow us
					</Typography>
					<SocialLinks />
				</ListItem>
			</List>
		</Grid>
	)
}

export default Subscribe
