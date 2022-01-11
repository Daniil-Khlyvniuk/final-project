import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import cartAPI from '../../utils/API/cartAPI'
import SubscribeTemlate from '../../utils/emailTemplates/order'
import { useDispatch, useSelector } from 'react-redux'
import { userOperations, userSelectors } from '../../store/user'
import { getUserOrders } from '../../utils/API/userAPI'
import { snackActions } from '../../utils/customHooks/useSnackBarUtils'


const CompletePay = () => {
	const [orderN, setOrderN] = useState()
	const handleShoppingBag = useHandleShoppingBag()
	const Order = JSON.parse(localStorage.getItem('ORDER') || '[]')
	const dispatch = useDispatch()
	const loading = useSelector(userSelectors.getIsLoading())
	const user = useSelector(userSelectors.getData())
	const isLoggedIn = !!user


	const OrderNumber = isLoggedIn ?
		orderN?.orderNo : Date.now().toString().slice(5)


	const clear = () => {
		localStorage.setItem('Unregistered', '[]')
	}
	const order = {
		products: Order.products,
		canceled: false,
		customerId: Order.customerId,
		deliveryAddress: Order.deliveryAddress,
		orderNumber: OrderNumber,
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
		await cartAPI.addOrder(order)
		await isLoggedIn ? dispatch(userOperations.fetchUserOrders()) : null
		await handleShoppingBag.afterBuy()
	}

	const getOrderN = async () => {
		const response = isLoggedIn ? await getUserOrders() : null
		await isLoggedIn ? setOrderN(response.data[length - 1]) : null
	}

	useEffect( ()=> {
		getOrderN()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[loading])

	useEffect(  () => {
		try {
			getData()
		}
		catch (error) {
			snackActions.success('You successfully Logged In')
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
				YOU ORDER IS : #{OrderNumber}
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