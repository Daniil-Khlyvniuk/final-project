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
		borderTop: '1px solid #373F41',
		padding: '80px 60px 40px',
	},
	boldText: {
		textTransform: 'capitalize',
		textDecoration: 'none',
		color: '#373F41',
		fontFamily: 'Mulish',
		fontWeight: 700,
		fontSize: '16px',
		lineHeight: 'normal'
	},
	notBoldText: {
		textTransform: 'capitalize',
		textDecoration: 'none',
		color: '#373F41',
		fontFamily: 'Mulish',
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: 'normal'
	},
}))

const Footer = () => {

	const {
		blockStyle,
		boldText,
		notBoldText,
	} = useStyles()

	return (
		<Box>
			<Grid container columns={12} 
				className={blockStyle}
			>
				<ShopLinks styles={{boldText,notBoldText}} />
				<AboutLinks styles={{boldText,notBoldText}} />
				<ContactUs styles={{boldText}} />
				<Subscribe />
			</Grid>
			<Credentials />
		</Box>
	)
}

export default Footer
