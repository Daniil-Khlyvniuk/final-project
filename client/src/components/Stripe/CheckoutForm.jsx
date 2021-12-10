import React, { useEffect, useState } from 'react'
import {
	PaymentElement,
	useStripe,
	useElements
} from '@stripe/react-stripe-js'
import { button, form, textBtn } from './style'
import Loader from '../UI/Loader/Loader'
import useSnack from '../../utils/customHooks/useSnack'


export default function CheckoutForm() {
	const stripe = useStripe()
	const elements = useElements()
	const {handleSnack} = useSnack()
	const [message, setMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)



	useEffect(() => {
		if (!stripe) {
			return
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			'payment_intent_client_secret'
		)


		if (!clientSecret) {
			return
		}


		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
			case 'succeeded':
				handleSnack({message: 'Payment succeeded!', style: 'success'})
				setMessage('Payment succeeded!')
				break
			case 'processing':
				handleSnack({message: 'Your payment is processing.', style: 'info'})
				setMessage('Your payment is processing.')
				break
			case 'requires_payment_method':
				handleSnack({message: 'Your payment was not successful, please try again.', style: 'warning'})
				setMessage('Your payment was not successful, please try again.')
				break
			default:
				handleSnack({message: 'Something went wrong.', style: 'error'})
				setMessage('Something went wrong.')
				break
			}
		})
	}, [stripe])


	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return(<Loader />)
		}

		setIsLoading(true)

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: 'http://localhost:3000/complete-order',
			},

		})

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === 'card_error' || error.type === 'validation_error') {
			setMessage(error.message)
			handleSnack({message: 'Something went wrong.', style: 'error'})
		} else {
			setMessage('An unexpected error occured.')
			handleSnack({message: 'An unexpected error occured.', style: 'error'})
		}

		setIsLoading(false)
	}


	// const pay = () => handleSubmit()




	return (
		<form id="payment-form" style={form}
			onSubmit={handleSubmit}
		>
			<PaymentElement id="payment-element" />
			<button
				style={button}
				disabled={isLoading || !stripe || !elements} id="submit"
			>
				<span id="button-text" style={textBtn}>NEXT</span>
			</button>
			{/* Show any error or success messages */}
			{message && <div sx={{color: 'white'}} id="payment-message">{message}</div>}

		</form>
	)
}