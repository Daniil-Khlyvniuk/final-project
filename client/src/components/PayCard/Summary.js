import React from 'react'
import { Typography } from '@mui/material'
import { border } from '../../pages/Cart/styles'


const Summary = () => {
  
	return (
		<box>
			<Typography
				variant='body1'
				component={'div'}
				color='primary'
				fontSize='40px'
				fontWeight='700'
				letterSpacing='3px'
				sx={{mb:'25px', mt:'10px'}}
			>
        Summary
			</Typography>
			<div style={border} />
		</box>
	)
}

export default Summary