import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {ThemeProvider} from '@mui/material/styles'
import theme from '../../utils/Theme'


const Error404 = () => {
	return (
		<Grid style={{backgroundImage: 'url(https://telegra.ph/file/3cc57f6e2278684805a33.jpg)', backgroundSize: 'cover'}} container direction={'column'} alignItems='center' className={ 'errorPage' } spacing={{ xs: 9}}>
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
					You may have mistyped the address or the page may have moved.
				</Typography>
			</Grid>
			<Grid item>
				<ThemeProvider theme={theme}>
					<Button color="primary" variant="contained">Home Page</Button>
				</ThemeProvider>
			</Grid>
		</Grid>
	)
}

export default Error404