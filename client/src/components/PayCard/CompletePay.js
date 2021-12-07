import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import cartAPI from '../../utils/API/cartAPI'

const CompletePay = () => {

	const newOrder = cartAPI.getCart()




	const OrderNum = Date.now()
	const handleShoppingBag = useHandleShoppingBag()

	useEffect(()=> {
		console.log(newOrder)
		cartAPI.addOrder(newOrder)
		handleShoppingBag.AfterBuy()
	},[])

	return (
		<Box style={{textAlign: 'center', margin: '7rem 0'}}>
			<Typography fontSize={32} sx={{mb: '14px', mt: '85px'}} variant={'h2'}>
        THANKS AND ENJOY!
        YOU ORDER IS : {OrderNum}
			</Typography>
			<Link exact to={'/shop/catalog'} style={{textDecoration: 'none'}}>
				<Button
					variant={'contained'}
					style={{marginTop: '2rem'}}
				>CONTINUE SHOPPING</Button></Link>
		</Box>
	)
}

export default CompletePay