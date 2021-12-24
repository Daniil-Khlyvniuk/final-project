import React from 'react'
import {Box,  Typography, Button} from '@mui/material'
import {Link} from 'react-router-dom'

const OrderList = () => {
	return (
		<Box sx={{textAlign: 'center', margin: '7rem 0'}}>
			<Typography
				fontSize={32}
				sx={{mb: '14px', mt: '85px', textTransform:'uppercase'}}
				variant={'h2'}>
				You still do not have any purchases
			</Typography>
			<Typography
				fontSize={16}
				variant={'body1'}
				sx={{mt:'25px'}}
			>
				Track your online orders to know where they are at any moment.
			</Typography>
			<Link to={'/shop/catalog'} style={{textDecoration: 'none'}}>
				<Button
					variant={'contained'}
					style={{marginTop: '2rem'}}>
					CONTINUE SHOPPING
				</Button>
			</Link>
		</Box>

	)
}

export default OrderList