import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, List, ListItem, Typography,
	Link as LinkMui } from '@mui/material'
import PropTypes from 'prop-types'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	outerLink: {
		color: '#373F41',
		fontFamily: 'Mulish',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: 'normal'
	}
}))

const ContactUs = ({styles}) => {
	const {outerLink} = useStyles()

	const {boldText} = styles
	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Link
						to="/contactUs" 
						className={boldText}
					>
								contact us
					</Link>
				</ListItem>
				<ListItem>
					<LinkMui
						href="tel:380938759922"
						target="_blank"
						className={outerLink}
						underline='none'
					>
									hello@gmail.com
					</LinkMui>
						
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
					<LinkMui
						href="tel:380938759922"
						target="_blank"
						className={outerLink}
						underline={'none'}
					>
								+38 093 875 9922
					</LinkMui>
				</ListItem>
			</List>
		</Grid>
	)
}

ContactUs.propTypes = {
	styles: PropTypes.object.isRequired,
}

export default ContactUs
