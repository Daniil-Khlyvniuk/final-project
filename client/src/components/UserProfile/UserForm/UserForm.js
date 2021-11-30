import React, { useState} from 'react'

import { Container, Grid, Typography , Box} from '@mui/material'
import { Form, Formik} from 'formik'
import * as Yup from 'yup'
import TextInput from './FormUI/Textfield'
import { phoneRegExp } from './data/Regex'
import countries from './data/countries.json'
import SelectInput from './FormUI/SelectInput'
import ButtonInput from './FormUI/ButtonInput'
import {useSelector} from 'react-redux'
import {userSelectors} from '../../../store/User'
import Loader from '../../UI/Loader/Loader'
import axios from 'axios'




const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string(),
	lastName: Yup.string(),
	email: Yup.string().email('Invalid email'),
	phone: Yup.string()
		.matches(phoneRegExp, 'Please enter a valid phone number')
	,
	address: Yup.string(),
	city: Yup.string(),
	country: Yup.string(),
	oldPass: Yup.string(),
	password: Yup.string(),
	confirmPass: Yup.string(),

})

const UserForm = () => {

	const [status,setStatus]=useState('')

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

	if(!user){
		return <Loader/>
	}
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
									}).then(() => setStatus('Changes Saved'))

									// eslint-disable-next-line no-console
									console.log(values)

									if(values.oldPass){
										const passwords = {
											'password': values.oldPass,
											'newPassword': values.password
										}
										// eslint-disable-next-line no-unused-vars,no-mixed-spaces-and-tabs
										axios.put('/api/customers/password',passwords,{headers: {Autorization : token}}).then((res)=>setStatus(res.data.password = 'Wrong Password' || res.data.message))
									}

									setTimeout(() =>{ setStatus(null)}, 3000)
								}}
							>
								<Form>
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
										<Grid item xs={12} md={6}>
											<TextInput name="phone" label="Phone number" />
										</Grid>
										<Grid item xs={12} md={6}>
											<TextInput
												name="email"
												label="Email"
												
											/>
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
												Change Password
											</Typography>
										</Grid>
										<Grid item md={12}>
											<TextInput
												name='oldPass'
												label='Old Password'
												type='password'

											/>
										</Grid>
										<Grid item md={6} xs={12}>
											<TextInput
												name="password"
												label="Password"
												type='password'
											/>
										</Grid>
										<Grid item md={6}  xs={12}>
											<TextInput
												name="confirmPass"
												label="Confirm Password"
												type='password'
											/>
										</Grid>
										<Grid item xs={12} sx={{textAlign:'center', mt:'16px'}}>
											{status && (<Typography
												variant={'body1'}
												textAlign={'center'}
												mb={'10px'}
											>
												{status}
											</Typography>)}
											<ButtonInput
												disabled={!!status}
											>
												Save Changes
											</ButtonInput>
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