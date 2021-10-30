import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './Page404.scss'


const theme = createTheme({
	palette: {
		neutral: {
			main: '#373f41',
			contrastText: '#fff',
		},
	},
})

const Error404 = () => {
	return (
		<Grid container direction={'column'} alignItems='center' className={ 'errorPage' } spacing={{ xs: 9}}>
			<Grid item>
				<Typography variant={'h1'}>
        404
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant={'h2'}>
					Oops. Looks like you came to wrong page on our server
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant={'body1'}>
					You may have mistyped the address or the page may have moved.
				</Typography>
			</Grid>
			<Grid item>
				<ThemeProvider theme={theme}>
					<Button color="neutral" variant="contained">Home Page</Button>
				</ThemeProvider>
			</Grid>
		</Grid>
	)
}

export default Error404