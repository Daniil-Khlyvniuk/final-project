import React from 'react'
import { Grid, List, ListItem, Typography, Link } from '@mui/material'

const ContactUs = () => {
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
						contact us
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
					<Link
						href="mailto:hello@gmail.com"
						target="_blank"
						variant={'semiBold'}
						capitalize={'on'}
					>
						hello@gmail.com
					</Link>
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
						variant='footerTextMedium'
						sx={{
							textAlign: {
								xs: 'center',
								lg: 'left',
							}
						}}
					>
						Studio M, 4th Floor8 Lower 
						Manchester street, M1 5QF
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
