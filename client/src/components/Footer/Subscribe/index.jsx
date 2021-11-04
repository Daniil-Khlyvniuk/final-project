import React from 'react'
import { styled } from '@mui/material/styles'
import { Grid, List, ListItem, Typography,
	Link as LinkMui } from '@mui/material'

import FormSubscribe from '../FormSubscribe'

import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const StyledListItem = styled(ListItem)(() => ({
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
}))

const StyledList = styled(List)(() => ({
	display: 'flex',
	flexDirection: 'row',
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
								Follow us
					</Typography>
					<StyledList 
						disablePadding={true}
					>
						<ListItem>
							<LinkMui
								href="https://facebook.com" 
								target="_blank"
							>
								<FacebookIcon />
							</LinkMui>
						</ListItem>
						<ListItem>
							<LinkMui
								href="https://twitter.com" 
								target="_blank"
							>
								<TwitterIcon />
							</LinkMui>
						</ListItem>
						<ListItem>
							<LinkMui
								href="https://instagram.com" 
								target="_blank"
							>
								<InstagramIcon />
							</LinkMui>
						</ListItem>
					</StyledList>
				</ListItem>
			</List>
		</Grid>
	)
}

export default Subscribe
