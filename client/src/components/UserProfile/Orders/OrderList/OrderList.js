import React from 'react'
import {Box, Divider, Typography, Chip} from '@mui/material'
import ShoppingBagCard from '../../../ShoppingBagCard/ShoppingBagCard'

const OrderList = () => {
	return (
		<Box mt={'25px'}>
			<Typography
				variant={'h1'}
				fontSize={'32px'}
				color={'primary'}
				textAlign={'center'}
				sx={{textTransform:'uppercase'}}
			>
				My purchases
			</Typography>
			<Box
				sx={{display:'flex',
					justifyContent:'space-between',
					alignItems:'center',
					mt:'25px'}}
			>
				<Typography
					variant={'body1'}
					component={'span'}
					fontSize={'18px'}
					color={'primary'}
					fontWeight='600'
					sx={{textTransform:'uppercase'}}
				>
					Order : #12345
					<Chip label="status" variant="outlined"
						sx={{ml:'10px'}}
						size="small"
					/>
				</Typography>
				<Typography
					variant={'body1'}
					fontSize={'18px'}
					color={'primary'}
					fontWeight='600'
					sx={{textTransform:'uppercase'}}
				>
					Price : $123
				</Typography>
			</Box>
			<Divider sx={{mt:'10px'}}/>
			<ShoppingBagCard card/>
		</Box>

	)
}

export default OrderList