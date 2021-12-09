import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import cartAPI from '../../utils/API/cartAPI'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'


const CompletePay = () => {
	const newOrder = cartAPI.getCart()
	const OrderNum = Date.now()
	const handleShoppingBag = useHandleShoppingBag()
	const [userData, setUserData] = useState(null)
	const [BuyGoods, setBuyGoods] = useState({})
	const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]') || []
	let unregistered = useSelector(userSelectors.getUnregistered())
	
	const user = useSelector(userSelectors.getData())
	const isLoggedIn = !!user


	useEffect(() => {
		axios('/api/customers/customer')
			.then(res =>setUserData(res.data))
		setBuyGoods(shoppingBag)
		handleShoppingBag.AfterBuy()
	}, [])

	useEffect(()=> {
		cartAPI.addOrder(newOrder)
	},[])


	// ShoppingBag: BuyGoods,
	
	// const customers = {...userData}
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	
	let customer = isLoggedIn ? {...userData} : unregistered

	const order = {
		products: BuyGoods,
		canceled: false,
		customerId: customer._id,
		deliveryAddress: {
			country: customer.country,
			city: customer.city,
			address: customer.address,
			postal: customer.zip
		},
		orderNumber: OrderNum,
		shipping: '',
		paymentInfo: 'Credit card',
		status: 'not shipped',
		email: customer.email,
		mobile: customer.phone,
		letterSubject: 'Thank you for order! You are welcome!',
		letterHtml:
			`<h1>Your order is placed. OrderNo is ${OrderNum}.</h1>
				<p>{Other details about order in your HTML}</p>`
	}

	localStorage.setItem('ORDER', JSON.stringify(order))



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