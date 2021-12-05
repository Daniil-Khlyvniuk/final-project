import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Error500 = () => {
	return (
		<Grid mt={'80px'} container direction={ 'column' } alignItems="center">
			<Grid item>
				<ErrorOutlineIcon sx={ { fontSize: 80 } } color="disabled"/>
			</Grid>
			<Grid item>
				<Typography variant={ 'h1' }>
					Error :(
				</Typography>
			</Grid>
			<Grid item>
				<Typography variant={ 'body1' }>
					Sorry, we had some technical problems
					during your last operation
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Error500