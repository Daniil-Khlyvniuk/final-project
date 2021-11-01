import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {ThemeProvider, styled} from '@mui/material/styles'
import theme from '../../utils/Theme'


const StyledGrid = styled(Grid)(() => ({
	backgroundImage: 'url(https://telegra.ph/file/3cc57f6e2278684805a33.jpg)',
	backgroundSize: 'cover',
	paddingBottom: '0.67em'
}))


const Error404 = () => {
	return (
		<StyledGrid
			container
			direction={'column'}
			alignItems='center'
			className={ 'errorPage' }
			spacing={{ xs: 9}}
		>
			<Grid item>
				<Typography variant={'h1'}>
        404
				</Typography>
			</Grid>
			<Grid item>
				<Typography  variant={'h2'}>
					Oops. Looks like you came to wrong page on our server
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant={'body1'}>
					You may have mistyped the
					address or the page may have moved.
				</Typography>
			</Grid>
			<Grid item>
				<ThemeProvider theme={theme}>
					<Button
						color="primary"
						variant="contained"
						href="/"
					>Home Page
					</Button>
				</ThemeProvider>
			</Grid>
		</StyledGrid>
	)
}

export default Error404