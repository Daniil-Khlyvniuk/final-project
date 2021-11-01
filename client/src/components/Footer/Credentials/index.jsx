import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const useStyles = makeStyles(() => ({
	subBlockStyle: {
		padding: '25px 0 20px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logoBottom: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
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
		<Box sx={{ borderColor: '#373F41', borderTop: 1, maxWidth: 1310, margin: '0 auto' }}>
			<Container maxWidth="lg">
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
			</Container>
		</Box>
	)
}

export default Credentials
