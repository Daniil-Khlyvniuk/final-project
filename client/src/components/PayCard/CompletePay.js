import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import cartAPI from '../../utils/API/cartAPI'
import SubscribeTemlate from '../../utils/emailTemplates/order'
// import { useSelector } from 'react-redux'
// import { getUserOrders } from '../../utils/API/userAPI'
import { snackActions } from '../../utils/customHooks/useSnackBarUtils'
// import { userSelectors } from '../../store/user'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'

const CompletePay = () => {
	const [orderN, setOrderN] = useState()
	const { shoppingBag, clearAfterBuy } = useHandleShoppingBag()
	const Order = JSON.parse(localStorage.getItem('ORDER') || '[]')
	// const user = useSelector(userSelectors.getData())
	// const isLoggedIn = !!user

	const clear = () => {
		localStorage.setItem('Unregistered', '[]')
	}

	const order = {
		products: shoppingBag,
		canceled: false,
		customerId: Order.customerId,
		deliveryAddress: Order.deliveryAddress,
		orderNumber: orderN,
		shipping: '',
		paymentInfo: 'Credit card',
		status: 'not shipped',
		email: Order.email,
		mobile: Order.mobile,
		letterSubject: 'Thank you for order on Postil!',
		letterHtml:
			`<h1>Your order is placed.</h1>
				${SubscribeTemlate()}`
	}

	const getData = async () => {
		const res = await cartAPI.addOrder(order)
		if(res)
		{
			setOrderN(res?.order?.orderNo)
			clearAfterBuy()
		}
	}

	useEffect(() => {
		try {
			getData()
		} catch (error) {
			snackActions.success('You successfully bought')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const sendOrder = () => {
		localStorage.setItem('ORDER', JSON.stringify(order))
	}

	sendOrder()

	return (
		<Box style={{ textAlign: 'center', margin: '7rem 0' }}>
			<Typography fontSize={32} sx={{ mb: '14px', mt: '85px' }} variant={'h2'}>
				THANKS AND ENJOY!
				YOU ORDER IS : #{orderN}
			</Typography>
			<Link exact="true" to={'/shop/catalog'} style={{ textDecoration: 'none' }}>
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