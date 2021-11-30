import React from 'react'
import { Typography, Box } from '@mui/material'
import { border } from '../../pages/Cart/styles'
import ShoppingBagCard from '../ShoppingBagCard/ShoppingBagCard'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'



const Summary = () => {
	const {shoppingBag} = useHandleShoppingBag()

	return (
		<Box>
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
			<div>
				{shoppingBag
					?.map((item, key) => <ShoppingBagCard key={key} {...item}/>)}
			</div>
		</Box>
	)
}

export default Summary