import React, { useState} from 'react'

import {Container, Grid, Typography, Box} from '@mui/material'
import { Form, Formik} from 'formik'
import * as Yup from 'yup'
import TextInput from './FormUI/Textfield'
import { phoneRegExp } from './data/Regex'
import countries from './data/countries.json'
import SelectInput from './FormUI/SelectInput'
import ButtonInput from './FormUI/ButtonInput'
import {useSelector , useDispatch} from 'react-redux'
import {userOperations, userSelectors} from '../../../store/User'
import Loader from '../../UI/Loader/Loader'
import axios from 'axios'
import CheckboxInput from './FormUI/CheckboxInput'
import SnackbarMess from '../../UI/SnackbarMess'





const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string().required('Required'),
	lastName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email'),
	phone: Yup.string()
		.matches(phoneRegExp, 'Please enter a valid phone number')
	,
	address: Yup.string(),
	city: Yup.string(),
	country: Yup.string(),
	zip: Yup.string().matches(/^[0-9]+$/, 'Must be only numbers')
		.max(6, 'Not valid zip code')
		.min(4, 'Not valid zip code'),
	oldPass: Yup.string(),
	password: Yup.string()
		.min(7, 'Password must be 7 digits minimum')
		.max(30, 'Password must be 30 digits maximum'),
	confirmPass: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').when('password', {
		is: value => value && value.length > 0,
		then: Yup.string().required('Field is required')
	}),
	subscribe : Yup.bool()

})

const UserForm = () => {

	const [status,setStatus]=useState({variant: null , message : null})
	const dispatch = useDispatch()


	const user = useSelector(userSelectors.getData())
	const token = useSelector(userSelectors.getToken())



	const INITIAL_FORM_STATE = {
		firstName: user?.firstName || '',
		lastName: user?.lastName || '',
		email: user?.email || '',
		phone: user?.phone || '',
		address: user?.address || '',
		city: user?.city || '',
		country: user?.country || '',
		zip: user?.zip || '',
		oldPass:'',
		password:'',
		confirmPass:'',
		subscribe: user?.subscribe || false
	}

	if (!user) {
		return <Loader />
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

									if(values.oldPass === '') {
										const update = {...user,
											firstName: values.firstName,
											lastName: values.lastName,
											email:values.email,
											phone: values.phone,
											address: values.address,
											city: values.city,
											country: values.country,
											subscribe: values.subscribe

										}
										axios.put('/api/customers', update , {
											headers: {Authorization : token}
										}).then(() => {
											setStatus({
												variant: 1 ,
												message: 'Changes successfully changed'})

											dispatch(userOperations.setNewData(update))

										})
									}


									if(values.oldPass.length> 2 && values.password === ''){
										setStatus({
											variant: 2 ,
											message: 'Enter new password'
										})

										// eslint-disable-next-line max-len
									} else if(values.oldPass.length > 2 && values.password.length> 2){

										const passwords = {
											'password': values.oldPass,
											'newPassword': values.password
										}
										// eslint-disable-next-line no-unused-vars,no-mixed-spaces-and-tabs
										axios.put('/api/customers/password',passwords,{headers: {Autorization : token}})
											.then((res)=>{
												if(res.data.password){
													setStatus({
														variant: 2 ,
														message: 'Wrong Password'})
												} else if(res.data.message){
													setStatus({
														variant: 1 ,
														message: 'Successfully changed'})
												}
											})
									}

									setTimeout(() =>{
										setStatus({variant: null , message: null})
									}, 1500)
								}}
							>
								{() => {
									return (
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
												<Grid item md={10} xs={12} >
													<TextInput name="address" label="Address" />
												</Grid>
												<Grid item md={2} xs={12} >
													<TextInput name="zip" label="Zip" />
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
												<Grid item md={12} xs={12}>
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
												<Grid item md={6}
													xs={12}
													align='center'>
													<TextInput
														name="confirmPass"
														label="Confirm Password"
														type='password'
													/>
												</Grid>

												<Grid item md={6}  xs={12} sx={{mt:'15px'}} >
													<Typography
														fontSize={'12px'}
														color={'#000'}
														fontWeight={700}
														lineHeight={'20px'}
													>
														Notification preferences
													</Typography>
													<Typography
														fontSize={'12px'}
														color={'#adafb2'}
														lineHeight={'18px'}
														letterSpacing={'.3px'}
														maxWidth={'325px'}
													>
														Receive Postil promotions and news.
														If you do not want to receive notifications,
														uncheck box.
													</Typography>
													<CheckboxInput
														name='subscribe'
														label='E-mail'
													/>
												</Grid>
												<Grid>
													{status.variant === 1 && <SnackbarMess
														open={true}
														message={status.message}
														variant={'success'}
													/>}
													{status.variant === 2 && <SnackbarMess
														open={true}
														message={status.message}
														variant={'warning'}
													/>}
												</Grid>

												<Grid item xs={12} sx={{textAlign:'center', mt:'16px'}}>

													<ButtonInput
														disabled={!!status.variant}
													>
														Save Changes
													</ButtonInput>
												</Grid>

											</Grid>
										</Form>
									)
								}}

							</Formik>
						</Container>
					</Grid>
				</Grid>
			</Box>

		</Box>
	)
}

export default UserForm