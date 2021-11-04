import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, List, ListItem, Typography, Link } from '@mui/material'

const ContactUs = () => {
	return (
		<Grid item xs={12} sm={3}>
			<List>
				<ListItem>
					<Link
						to="/contact" 
						component={RouterLink}
						variant={'bold'}
					>
						contact us
					</Link>
				</ListItem>
				<ListItem>
					<Link
						href="mailto:hello@gmail.com"
						target="_blank"
						variant={'semiBold'}
						capitalize={'on'}
					>
						hello@gmail.com
					</Link>
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
					<Link
						href="tel:380938759922"
						target="_blank"
						variant={'semiBold'}
						capitalize={'on'}
					>
						+38 093 875 9922
					</Link>
				</ListItem>
			</List>
		</Grid>
	)
}



export default ContactUs
