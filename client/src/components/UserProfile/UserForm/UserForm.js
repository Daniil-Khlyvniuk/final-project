import React from 'react'

import { Container, Grid, Typography , Box} from '@mui/material'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from './FormUI/Textfield'
import DateInput from './FormUI/DateInput'
import { phoneRegExp } from './data/Regex'
import countries from './data/countries.json'
import gender from './data/gender.json'
import SelectInput from './FormUI/SelectInput'
import ButtonInput from './FormUI/ButtonInput'


const INITIAL_FORM_STATE = {
	firstName: '',
	lastName: '',
	birthday: '',
	email: '',
	phone: '',
	address: '',
	city: '',
	country: '',
	message: '',
	termsOfService: false,
}

const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string().required('Required'),
	lastName: Yup.string().required('Required'),
	birthday: Yup.date().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	phone: Yup.string()
		.matches(phoneRegExp, 'Please enter a valid phone number')
		.required('Required'),
	address: Yup.string().required('Required'),
	city: Yup.string().required('Required'),
	country: Yup.string().required('Required'),
	message: Yup.string(),
	termsOfService: Yup.boolean()
		.oneOf([true], 'The terms and conditions must be accepted.')
		.required('The terms and conditions must be accepted.'),
})

const UserForm = () => {
	return (
		<Box my='15px'>
			<Typography
				variant='body1'
				color='primary'
				fontSize='16px'
				fontWeight='700'
				letterSpacing='3px'
				textAlign='center'
				component={'div'}
				sx={{mb:'25px', mt:'10px'}}
			>
				Personal information
			</Typography>
			<Box>
				<Grid container>
					<Grid item xs={12}>
						<Container maxWidth="md">
							<Formik
								initialValues={{ ...INITIAL_FORM_STATE }}
								validationSchema={FORM_VALIDATION}
								onSubmit={() => {
									// eslint-disable-next-line no-console
									console.log('hhhh')
								}}
							>
								<Form>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<TextInput name="firstName" label="First Name"
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextInput name="lastName" label="Last Name" />
										</Grid>
										<Grid item xs={12} md={6}>
											<TextInput name="phone" label="Phone number" />
										</Grid>
										<Grid item xs={12} md={6}>
											<TextInput name="email" label="Email" />
										</Grid>
										<Grid item xs={12} md={6}>
											<SelectInput
												name="gender"
												label="Gender"
												options={gender}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<DateInput name="birthday" label="Birthday date" />
										</Grid>
										<Grid item xs={12}>
											<Typography
												variant='body1'
												component={'div'}
												color='primary'
												fontSize='16px'
												fontWeight='700'
												letterSpacing='3px'
												textAlign='center'
												sx={{my:'18px'}}
											>
													Delivery Address
											</Typography>
										</Grid>
										<Grid item xs={12} >
											<TextInput name="address" label="Address" />
										</Grid>
										<Grid item xs={12} md={6}>
											<TextInput name="city" label="City" />
										</Grid>
										<Grid item xs={12} md={6}>
											<SelectInput
												name="country"
												label="Country"
												options={countries}
											/>
										</Grid>
										<Grid item xs={12} sx={{textAlign:'center', mt:'16px'}}>
											<ButtonInput>Save Changes</ButtonInput>
										</Grid>
									</Grid>
								</Form>
							</Formik>
						</Container>
					</Grid>
				</Grid>
			</Box>

		</Box>
	)
}

export default UserForm