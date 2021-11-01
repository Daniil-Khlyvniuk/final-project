import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledGrid = styled(Grid)(() => ({
	borderTop: '1px solid #373F41',
	padding: '25px 60px 20px',
	// display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}))

const StyledBox = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	left: 60,
}))

const useStyles = makeStyles(() => ({
	logoBottomLeft: {
		marginRight: 10,
	}
}))

const Credentials = () => {

	const {logoBottomLeft} = useStyles()
  
	return (
		<StyledGrid 
			container
			columns={12}
			direction="row"
		>
			<StyledBox>
				<img 
					className={logoBottomLeft} 
					src="./img/bottom_logo1.png" alt="Company" />
				<img src="./img/bottom_logo2.png" alt="Postil logo" />
			</StyledBox>
			<Typography variant='footerTextMedium'>
    © 2010 — 2020  Simple Studio 
			</Typography>
			<Typography></Typography>
		</StyledGrid>
	)
}

export default Credentials
