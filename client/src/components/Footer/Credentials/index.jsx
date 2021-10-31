import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Typography } from '@mui/material'

const useStyles = makeStyles(() => ({
	subBlockStyle: {
		borderTop: '1px solid #373F41',
		padding: '25px 60px 20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoBottom: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 60,
	},
	logoBottomLeft: {
		marginRight: 10,
	}
}))

const Credentials = () => {

	const {
		subBlockStyle,
		logoBottom,
		logoBottomLeft
	} = useStyles()
  
	return (
		<Grid container columns={12}
			className={subBlockStyle}
		>
			<Typography className={logoBottom}>
				<img 
					className={logoBottomLeft} 
					src="./img/bottom_logo1.png" alt="Company" />
				<img src="./img/bottom_logo2.png" alt="Postil logo" />
			</Typography>
			<Typography variant='footerTextMedium'>
    © 2010 — 2020  Simple Studio 
			</Typography>
			<Typography></Typography>
		</Grid>
	)
}

export default Credentials
