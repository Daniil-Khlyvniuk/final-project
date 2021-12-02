import React, { useState } from 'react'
import { border, checkboxPay, PayCC, PayElem, PayText, PayTextSub, PayCash, CashText, CashTextHead, CashTextSub } from './style'
import { Grid, Radio } from '@mui/material'
import Payment from '../Stripe/Payment'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import MoneyIcon from '@mui/icons-material/Money'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import Btn from './Btn'


const PayCc = () => {
	const [selectedValue, setSelectedValue] = useState('a')

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
				<section
					style={PayElem}
				>
					<div style={PayCC}>
						<Radio {...controlProps('a')} style={checkboxPay} />
						<div
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
						</div>
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
				<div style={border} />
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
				<div style={border} />
			</Grid>
		</box>
	)
}


export default PayCc