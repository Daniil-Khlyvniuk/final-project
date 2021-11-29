import React from 'react'
import axios from 'axios'
import { Form, Formik } from 'formik'
import { Grid, Typography } from '@mui/material'
import { border } from '../../pages/Cart/styles'
import TextInput from '../UserProfile/UserForm/FormUI/Textfield'
import SelectInput from '../UserProfile/UserForm/FormUI/SelectInput'
import countries from '../UserProfile/UserForm/data/countries.json'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'
import * as Yup from 'yup'
import { phoneRegExp } from '../UserProfile/UserForm/data/Regex'

const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string(),
	lastName: Yup.string(),
	// birthday: Yup.date(),
	email: Yup.string().email('Invalid email'),
	phone: Yup.string()
		.matches(phoneRegExp, 'Please enter a valid phone number')
	,
	address: Yup.string(),
	city: Yup.string(),
	country: Yup.string(),
	oldPass: Yup.string(),
	password: Yup.string(),
	confirmPass: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match'),

})

const ShipAdr = () => {

	const user = useSelector(userSelectors.getData())
	const token = useSelector(userSelectors.getToken())

	const INITIAL_FORM_STATE = {
		firstName: user?.firstName || null,
		lastName: user?.lastName || null,
		email: user?.email || null,
		phone: user?.phone || null,
		address: user?.address || null,
		city: user?.city || null,
		country: user?.country || null,
		oldPass:'',
		password:'',
		confirmPass:''
	}
	return (
		<div>
			<Formik
				initialValues={{ ...INITIAL_FORM_STATE }}
				validationSchema={FORM_VALIDATION}
				onSubmit={(values) => {

					const update ={
						firstName: values.firstName,
						lastName: values.lastName,
						email:values.email,
						phone: values.phone,
						address: values.address,
						city: values.city,
						country: values.country,

					}
					axios.put('/api/customers', update , {
						headers: {Authorization : token}
					})
					alert('Data saved')
					if(values.password){
						const passwords = {
							'password': values?.oldPass,
							'newPassword': values?.password
						}
						axios.put('api/customers/password', passwords ,{
							headers: {Authorization : token}
						})
						alert('Password changed')
					}


				}}
			>
				<Form>
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
						Shipping Details
					</Typography>
					<div style={border} />
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<TextInput
								name="firstName"
								label="First Name"
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextInput
								name="lastName"
								label="Last Name"
							/>
						</Grid>
						<Grid item xs={12} >
							<TextInput name="address" label="Address" />
						</Grid>
						<Grid item xs={12} >
							<TextInput name="address2" label="Address 2" />
						</Grid>
						<Grid item xs={12} md={6}>
							<SelectInput
								name="country"
								label="Country"
								options={countries}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextInput name="city" label="City" />
						</Grid>
						<Grid item xs={12} md={6}>
							<TextInput
								name="Zip/Postal Code"
								label="Zip/Postal Code"

							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextInput name="phone" label="Phone number" />
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</div>
	)
}

export default ShipAdr