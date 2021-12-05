import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CompletePay = () => {

	const OrderNum = Date.now()
  
	return (
		<Box style={{textAlign: 'center', margin: '7rem 0'}}>
			<Typography fontSize={32} sx={{mb: '14px', mt: '85px'}} variant={'h2'}>
        THANKS AND ENJOY!
        YOU ORDER IS : {OrderNum}
			</Typography>
			<Link exact to={'/shop/catalog'} style={{textDecoration: 'none'}}>
				<Button variant={'contained'} style={{marginTop: '2rem'}}>CONTINUE SHOPPING</Button></Link>
		</Box>
	)
}

export default CompletePay