import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Container, Grid } from '@mui/material'

import ContactUs from './ContactUs'
import Subscribe from './Subscribe'
import ShopLinks from './ShopLinks'
import AboutLinks from './AboutLinks'
import Credentials from './Credentials'

const useStyles = makeStyles(() => ({
	blockStyle: {
		padding: '80px 0 40px',
	},
}))

const Footer = () => {

	const { blockStyle } = useStyles()

	return (
		<Box sx={{ borderColor: '#373F41', borderTop: 1, maxWidth: 1310, margin: '0 auto' }}>
			<Container maxWidth="lg">
				<Grid container columns={12}
					className={blockStyle}
				>
					<ShopLinks />
					<AboutLinks />
					<ContactUs />
					<Subscribe />
				</Grid>
			</Container>
			<Credentials />
		</Box>
	)
}

export default Footer
