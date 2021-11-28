import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import axios from 'axios'
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe('pk_test_YXhgLEwTTJdW2AfHsgJJNfAN')

export default function Payment() {
	const [clientSecret, setClientSecret] = useState('')
	const userToken = localStorage.getItem('userToken')

	useEffect(() => {
		const data = JSON.stringify({})

		axios.post('/api/cart/payment',

			data,
			{
				headers: {
					Authorization: userToken
				},
			},
		)
			.then((data) => {
				setClientSecret(data.data.clientSecret)})
	}, [])

	const appearance = {
		theme: 'stripe',
		variables: {
			colorPrimary: '#373f41',
			colorText: '#373f41',
		},
	}
	const options = {
		clientSecret,
		appearance,
	}

	return (
		<box>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</box>
	)
}