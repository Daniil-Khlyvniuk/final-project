import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Typography, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledGrid = styled(Grid)(() => ({
	padding: '25px 0 20px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}))

const StyledBox = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}))

const StyledContainer = styled(Container)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}))

const useStyles = makeStyles(() => ({
	logoBottomLeft: {
		marginRight: 10,
	}
}))

const Credentials = () => {
	const { logoBottomLeft } = useStyles()

	return (
		<Box sx={{ borderColor: '#373F41', borderTop: 1, maxWidth: 1310, margin: '0 auto' }}>
			<StyledGrid
				container
				columns={12}
				direction="row"
			>
				<StyledContainer maxWidth="lg" >
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
				</StyledContainer>
			</StyledGrid>
		</Box>
	)
}

export default Credentials
