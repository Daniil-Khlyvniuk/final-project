import React from 'react'
import { styled } from '@mui/material/styles'
import { List, ListItem, Link as LinkMui } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const StyledList = styled(List)(() => ({
	display: 'flex',
	flexDirection: 'row',
}))

const SocialLinks = () => 
{
	return (
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
	)
}

export default SocialLinks
