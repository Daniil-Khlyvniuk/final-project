import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
// import cartAPI from '../../utils/API/cartAPI'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'
import ordersAPI from '../../utils/API/ordersAPI'

const CompletePay = () => {
	// const newOrder = cartAPI.getCart()
	// const Order = ordersAPI.placeOrder()
	const OrderNum = Date.now()
	const handleShoppingBag = useHandleShoppingBag()
	const [userData, setUserData] = useState(null)
	const [BuyGoods, setBuyGoods] = useState({})
	const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]')
	let unregistered =  JSON.parse(localStorage.getItem('Unregistered')|| '[]')
	
	const user = useSelector(userSelectors.getData())
	const isLoggedIn = !!user


	useEffect(() => {
		axios('/api/customers/customer')
			.then(res =>setUserData(res.data))
		setBuyGoods(shoppingBag)
		return handleShoppingBag.AfterBuy()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// useEffect(()=> {
	// 	return  cartAPI.addOrder(newOrder)
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// },[])


	let customer = isLoggedIn ? {...userData} : unregistered

	const clear = () => {
		localStorage.setItem('Unregistered','[]')
	}
	const order = {
		products: {
			cartQuantity: BuyGoods.length,
			product: BuyGoods,
		},
		canceled: false,
		customerId: customer?._id,
		deliveryAddress: {
			country: customer?.country,
			city: customer?.city,
			address: customer?.address,
			postal: customer?.zip
		},
		orderNumber: OrderNum,
		shipping: '',
		paymentInfo: 'Credit card',
		status: 'not shipped',
		email: customer?.email,
		mobile: customer?.phone,
		letterSubject: 'Thank you for order! You are welcome!',
		letterHtml:
			`<h1>Your order is placed. OrderNo is ${OrderNum}.</h1>
				<p>{Other details about order in your HTML}</p>`
	}

	localStorage.setItem('ORDER', JSON.stringify(order))
	const sendOrder = () => {
		return ordersAPI.placeOrder(order)
	}

	sendOrder()
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
					onClick={()=> {
						clear()
					}}
				>CONTINUE SHOPPING</Button></Link>
		</Box>
	)
}

export default CompletePay