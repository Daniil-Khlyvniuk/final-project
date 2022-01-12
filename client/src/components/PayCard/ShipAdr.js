import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { Box, Button, Grid, Typography } from '@mui/material'
import { border } from './styles'
import countries from '../UserProfile/UserForm/data/countries.json'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../store/user'
import {CHECKOUT_FORM} from '../Form/setting/Schemes'
import PropTypes from 'prop-types'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CustomInput from '../Form/setting/customElements/CustomInput'
import CustomAutoComplete from '../Form/setting/customElements/CustomAutoComplete'
import {snackActions} from '../../utils/customHooks/useSnackBarUtils'


const ShipAdr = ({ handleNext, handleBack }) => {
	const token = useSelector(userSelectors.getToken())
	let unregistered = JSON.parse(localStorage.getItem('Unregistered') || '[]')
	const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]')
	const [userData, setUserData] = useState(null)
	const [BuyGoods, setBuyGoods] = useState({})
	const user = useSelector(userSelectors.getData())
	const isLoggedIn = !!user

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async () => {
		setBuyGoods(shoppingBag)
		if (isLoggedIn === true) {
			try {
				const res = await axios('/api/customers/customer')
				const data = await res.data
				await setUserData(data)
			} catch (e) {
				snackActions.warning('User Error')
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	let customer = isLoggedIn ? {...userData} : unregistered
	let userId = isLoggedIn ? customer._id : '61db3e8460e1606e6481dd52'
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

	return (
		<div>
			<Formik
				// initialValues={{ ...INITIAL_FORM_STATE }}
				initialValues={{
					firstName: user?.lastName || '',
					lastName: user?.lastName || '',
					email: user?.email || '',
					phone: user?.phone || '',
					address: user?.address || '',
					city: user?.city || '',
					country: '',
					zip: user?.zip || '',
				}}
				validationSchema={CHECKOUT_FORM}
				onSubmit={(values) => {

					const update = {
						firstName: values.firstName,
						lastName: values.lastName,
						email: values.email,
						phone: values.phone,
						address: values.address,
						city: values.city,
						// country: values.country,
						zip: values.zip,

					}
					{
						isLoggedIn ?
							axios.put('/api/customers', update, {
								headers: { Authorization: token }
							}) : localStorage.setItem('Unregistered', JSON.stringify(update))
					}
				}}
			>
				{({ handleSubmit, isValid, dirty }) => (
					<Form>
						<Typography
							variant='body1'
							color='primary'
							fontSize='40px'
							fontWeight='700'
							letterSpacing='3px'
							// textAlign='center'
							component={'div'}
							sx={{ mb: '25px', mt: '10px' }}
						>
							Shipping Details
						</Typography>
						<div style={border} />
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<Field
									component={CustomInput}
									data-testid="firstName"
									name="firstName"
									type="text"
									label="First Name"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<Field
									component={CustomInput}
									data-testid="lastName"
									name="lastName"
									type="text"
									label="Last Name"
								/>
							</Grid>
							<Grid item xs={12} >
								<Field
									component={CustomInput}
									data-testid="address"
									name="address"
									type="text"
									label="Address"
								/>
							</Grid>
							<Grid item xs={6} >
								<Field
									component={CustomInput}
									data-testid="address2"
									name="address2"
									type="text"
									label="Address 2"
								/>
							</Grid>
							<Grid item xs={6} md={6}>
								<Field
									component={CustomInput}
									data-testid="email"
									name="email"
									type="text"
									label="Email"
									options={countries}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<Field
									sx={{
										marginTop: '15px',
									}}
									component={CustomAutoComplete}
									data-testid="country"
									name="country"
									label="Country"
									type="text"
									options={Object.keys(countries).map((item) =>
										countries[item])}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<Field
									component={CustomInput}
									data-testid="city"
									name="city"
									type="text"
									label="City"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<Field
									component={CustomInput}
									data-testid="zip"
									name="zip"
									type="text"
									label="Zip"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<Field
									component={CustomInput}
									data-testid="phone"
									name="phone"
									type="text"
									label="Phone"
								/>
							</Grid>
						</Grid>
						<Box style={border} />
						<Box sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}>
							<Button
								variant="text"
								sx={{
									fontSize: '18px',
									color: '#373F41',
								}}
								onClick={() => {
									handleBack()
								}}
							><ArrowBackIosNewIcon
									sx={{
										height: '17px',
									}}
								/> BACK</Button>
							<Button
								disabled={!isValid && !dirty}
								type='submit'
								sx={{
									width: '200px',
									height: '50px',
									background: '#373F41',
									borderRadius: '4px',
									border: 'none',
									top: '102%',
									cursor: 'pointer',
								}}
								onClick={async () => {
									await sendOrder()
									handleSubmit()
									{dirty && isValid && handleNext() }
								}}
								variant="contained"
							>
								NEXT
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</div>
	)
}

ShipAdr.propTypes = {
	handleNext: PropTypes.func,
	handleBack: PropTypes.func,
}
export default ShipAdr