import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './Page404.scss'

const Error404 = () => {
	return (
		<Grid container direction={'column'} alignItems='center' className={ 'errorPage' } spacing={{ md: 10 }}>
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
				<Button className={ 'submit' } variant="contained">Home Page</Button>
			</Grid>
		</Grid>
	)
}

export default Error404