import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import cartAPI from '../../utils/API/cartAPI'
import UseSnack from '../../utils/customHooks/useSnack'
import SubscribeTemlate from '../../utils/emailTemplates/order'
// import ordersAPI from '../../utils/API/ordersAPI'

const CompletePay = () => {
	// const Order = ordersAPI.placeOrder()
	const OrderNum = Date.now()
	const handleShoppingBag = useHandleShoppingBag()
	const { handleSnack } = UseSnack()
	const Order = JSON.parse(localStorage.getItem('ORDER') || '[]')


	const clear = () => {
		localStorage.setItem('Unregistered', '[]')
	}
	const order = {
		products: Order.products,
		canceled: false,
		customerId: Order.customerId,
		deliveryAddress: Order.deliveryAddress,
		orderNumber: OrderNum,
		shipping: '',
		paymentInfo: 'Credit card',
		status: 'not shipped',
		email: Order.email,
		mobile: Order.mobile,
		letterSubject: 'Thank you for order! You are welcome!',
		letterHtml:
			`<h1>Your order is placed. OrderNo is ${OrderNum}.</h1>
				${SubscribeTemlate(OrderNum)}`
	}


	useEffect(async () => {
		try {
			await cartAPI.addOrder(order)
			await handleShoppingBag.afterBuy()
		}
		catch (error) {
			handleSnack({ message: 'Server response error', style: 'warning' })
		}
	}, [])


	const sendOrder = () => {
		localStorage.setItem('ORDER', JSON.stringify(order))
	}

	sendOrder()

	return (
		<Box style={{ textAlign: 'center', margin: '7rem 0' }}>
			<Typography fontSize={32} sx={{ mb: '14px', mt: '85px' }} variant={'h2'}>
				THANKS AND ENJOY!
				YOU ORDER IS : {OrderNum}
			</Typography>
			<Link exact to={'/shop/catalog'} style={{ textDecoration: 'none' }}>
				<Button
					variant={'contained'}
					style={{ marginTop: '2rem' }}
					onClick={() => {
						clear()
					}}
				>CONTINUE SHOPPING</Button></Link>
		</Box>
	)
}

export default CompletePay