import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import styles from './Page404.scss'

const Error404 = () => {
	return (
		<Grid container direction={'column'} alignItems='center' >
			<Grid item>
				<Typography variant={'h1'}>
        404
				</Typography>
			</Grid>
			<Grid item>
				<img className={styles.image} src='https://telegra.ph/file/85aa1a70cdc9762a46894.jpg' alt='error 404 image' />
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
		</Grid>
	)
}

export default Error404