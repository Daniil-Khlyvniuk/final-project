import { Typography } from '@mui/material'
import React from 'react'


const NotMatched = () => {
	return (
		<Typography
			sx={ { mb: '14px', mt: '30px', fontSize: { md: 32, xs: 25 } } }
			variant="h2"
		>
			No products found
		</Typography>
	)
}

export default NotMatched