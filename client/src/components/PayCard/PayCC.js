import React, { useEffect, useState } from 'react'
import { border, checkboxPay, PayCC, PayElem, PayText, PayTextSub, PayCash, CashText, CashTextHead, CashTextSub } from './style'
import { Box, Grid, Radio, Typography } from '@mui/material'
import Payment from '../Stripe/Payment'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import MoneyIcon from '@mui/icons-material/Money'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import Btn from './Btn'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'
import axios from 'axios'




const PayCc = () => {
	const [selectedValue, setSelectedValue] = useState('a')
	let unregistered =  JSON.parse(localStorage.getItem('Unregistered')|| '[]')
	const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]')
	const [userData, setUserData] = useState(null)
	const [BuyGoods, setBuyGoods] = useState({})
	const user = useSelector(userSelectors.getData())
	const isLoggedIn = !!user


	console.log('sadasd',unregistered)
	useEffect( async() => {
		setBuyGoods(shoppingBag)
		if (isLoggedIn === true) {
			try {
				const res = await axios('/api/customers/customer')
				const data = await res.data
				await setUserData(data)
			} catch (e) {
				console.log('ee',e)
			}}
	},[])

	let customer = isLoggedIn ? {...userData} : unregistered
	let userId = isLoggedIn ? customer._id : '61b8813806744e13c4efc6a0'
	const order = {
		products: [{
			cartQuantity: BuyGoods.length,
			product: BuyGoods,
		}],
		canceled: false,
		customerId:	userId,
		deliveryAddress: {
			country: customer.country,
			city: customer.city,
			address: customer.address,
			postal: customer.zip
		},
		orderNumber: null,
		shipping: '',
		paymentInfo: 'Credit card',
		status: 'not shipped',
		email: customer?.email,
		mobile: customer.phone,
		letterSubject: 'Thank you for order! You are welcome!',
		letterHtml: null,
	}





	const sendOrder = () => {
		localStorage.setItem('ORDER', JSON.stringify(order))
	}


	sendOrder()

	const handleChange = (event) => {
		setSelectedValue(event.target.value)
	}

	const controlProps = (item) => ({
		checked: selectedValue === item,
		onChange: handleChange,
		value: item,
		name: 'pay-radio-button',
		inputProps: { 'aria-label': item },
	})
	return (
		<box>
			<Grid item xs={12}>
				<Typography
					variant='body1'
					color='primary'
					fontSize='40px'
					fontWeight='700'
					letterSpacing='3px'
					// textAlign='center'
					component={'div'}
					sx={{mb:'25px', mt:'10px'}}
				>
					Payment Details
				</Typography>
				<Box style={border} />
				<section
					style={PayElem}
				>
					<div style={PayCC}>
						<Radio {...controlProps('a')} style={checkboxPay} />
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<p
								style={PayText}
							>Credit Card</p>

							<p
								style={PayTextSub}
							>Please enter your credit card details</p>
						</Box>
						<div>
							<CreditCardIcon sx={{
								fontSize: '80px',
								color: '#ffffff',
							}} />
							<MoneyIcon
								sx={{
									fontSize: '80px',
									color: '#ffffff',
								}}
							/>
						</div>
					</div>
					{selectedValue === 'a' && <Payment/>}
					{selectedValue === 'b' && <Btn />}
				</section>
				<Box style={border} />
			</Grid>
			<Grid item xs={12}>
				<div style={PayCash}>
					<Radio {...controlProps('b')} color="default" />
					<div style={CashText}>
						<p style={CashTextHead}>
						Payment to the courier
						</p>
						<p style={CashTextSub}>
						Cash or card payment to the courier upon delivery
						</p>
					</div>
					<LocalMallIcon 
						sx={{
							fontSize: '80px',
							color: '#828788',
						}}/>
				</div>
				<Box style={border} />
			</Grid>
		</box>
	)
}


export default PayCc