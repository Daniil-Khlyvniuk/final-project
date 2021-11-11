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

const StyledListItem = styled(ListItem)(() => ({
	paddingLeft: '15px',
	paddingRight: '15px',
}))

const SocialLinks = () => 
{
	return (
		<StyledList 
			disablePadding={true}
		>
			<StyledListItem>
				<LinkMui
					href="https://facebook.com" 
					target="_blank"
				>
					<FacebookIcon />
				</LinkMui>
			</StyledListItem>
			<StyledListItem>
				<LinkMui
					href="https://twitter.com" 
					target="_blank"
				>
					<TwitterIcon />
				</LinkMui>
			</StyledListItem>
			<StyledListItem>
				<LinkMui
					href="https://instagram.com" 
					target="_blank"
				>
					<InstagramIcon />
				</LinkMui>
			</StyledListItem>
		</StyledList>
	)
}

export default SocialLinks
