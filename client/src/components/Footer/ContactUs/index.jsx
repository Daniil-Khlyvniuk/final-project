import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, List, ListItem, Typography,
	Link as LinkMui } from '@mui/material'
import PropTypes from 'prop-types'

import { styled } from '@mui/material/styles'

const StyledLinkMui = styled(LinkMui)((theme) => ({
	color: theme.primary,
	fontFamily: 'Mulish',
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: 'normal'
}))

const ContactUs = ({styles}) => {

	const {boldText} = styles
	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Link
						to="/contact" 
						className={boldText}
					>
								contact us
					</Link>
				</ListItem>
				<ListItem>
					<StyledLinkMui
						href="mailto:hello@gmail.com"
						target="_blank"
						underline='none'
					>
						hello@gmail.com
					</StyledLinkMui>
						
				</ListItem>
				<ListItem>
					<Typography 
						variant='footerTextMedium'
					>
							Studio M, 4th Floor8 Lower 
								Manchester street, M1 5QF
					</Typography>
				</ListItem>
				<ListItem>
					<StyledLinkMui
						href="tel:380938759922"
						target="_blank"
						underline={'none'}
					>
								+38 093 875 9922
					</StyledLinkMui>
				</ListItem>
			</List>
		</Grid>
	)
}

ContactUs.propTypes = {
	styles: PropTypes.object.isRequired,
}

export default ContactUs
