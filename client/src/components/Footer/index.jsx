import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Grid } from '@mui/material'

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

	const {blockStyle} = useStyles()

	return (
		<Box>
			<Grid container columns={12} 
				className={blockStyle}
			>
				<ShopLinks />
				<AboutLinks />
				<ContactUs />
				<Subscribe />
			</Grid>
			<Credentials />
		</Box>
	)
}

export default Footer
