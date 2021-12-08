import React from 'react'
import axios from 'axios'
import { Form, Formik } from 'formik'
import { Button, Grid, Typography } from '@mui/material'
import { border } from './styles'
import TextInput from '../UserProfile/UserForm/FormUI/Textfield'
import SelectInput from '../UserProfile/UserForm/FormUI/SelectInput'
import countries from '../UserProfile/UserForm/data/countries.json'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'
import * as Yup from 'yup'
import { phoneRegExp } from '../UserProfile/UserForm/data/Regex'
import { button } from '../Stripe/style'




const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup
		.string()
		.min(4, 'Write Real Name')
		.max(50, 'Too Long')
		.typeError('Write Real Name')
		.required('required'),
	lastName: Yup
		.string()
		.min(4, 'Write Real Name')
		.max(50, 'Too Long')
		.typeError('Write Real Name')
		.required('required'),
	phone: Yup.string()
		.matches(phoneRegExp, 'Please enter a valid phone number').required('required')
	,
	address: Yup
		.string()
		.min(10, 'Write Real Address')
		.max(50, 'Too Long')
		.required('required'),
	city: Yup
		.string()
		.max(10, 'Write Real city')
		.required('required'),
	zip: Yup
		.string()
		.matches(/^[0-9]+$/, 'Must be only numbers')
		.max(6, 'Not valid zip code')
		.min(4, 'Not valid zip code')
		.required('required'),

})

// eslint-disable-next-line react/prop-types
const ShipAdr = ({handleNext}) => {

	const user = useSelector(userSelectors.getData())
	const token = useSelector(userSelectors.getToken())

	const INITIAL_FORM_STATE = {
		firstName:user?.lastName || '',
		lastName: user?.lastName ||'',
		phone: user?.phone || '',
		address: user?.address || '',
		city: user?.city || '',
		country: user?.country || '',
		zip: user?.zip || '' ,
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
						zip: values.zip,

					}
					axios.put('/api/customers', update , {
						headers: {Authorization : token}
					})
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
							sx={{mb:'25px', mt:'10px'}}
						>
						Shipping Details
						</Typography>
						<div style={border} />
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<TextInput
									name="firstName"
									label="First Name *"


								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextInput
									name="lastName"
									label="Last Name *"
								/>
							</Grid>
							<Grid item xs={12} >
								<TextInput name="address" label="Address *" />
							</Grid>
							<Grid item xs={12} >
								<TextInput name="address2" label="Address 2" />
							</Grid>
							<Grid item xs={12} md={6}>
								<SelectInput
									name="country"
									label="Country *"

									options={countries}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextInput name="city" label="City *" />
							</Grid>
							<Grid item xs={12} md={6}>
								<TextInput
									name="zip"
									label="Zip/Postal Code *"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextInput name="phone" label="Phone number *" />
							</Grid>
						</Grid>
						<Button
							disabled={!isValid && !dirty}
							type='submit'
							style={button}
							onClick={ () => {
								handleSubmit()
								{isValid &&  dirty && handleNext()}
							}}
							variant="contained"
						>
							NEXT
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ShipAdr