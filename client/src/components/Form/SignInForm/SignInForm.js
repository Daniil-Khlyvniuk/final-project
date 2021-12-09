import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { SING_UP_SCHEMA } from '../setting/Schemes'
import { useFormStyle } from '../../../utils/customHooks/useFormStyle'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomInput from '../setting/CustomInput'
import CustomCheckBox from '../setting/CustomCheckBox'
import CustomSwitch from '../setting/CustomSwitch'
import useAuth from '../../../utils/customHooks/useAuth'

const SignInForm = () => {
	const [serverResult, setServerResult] = useState(null)
	const { register } = useAuth()

	const classes = useFormStyle()

	return (
		<Box
			sx={{
				overflowY: 'auto',
				maxHeight: '530px',
				paddingRight: '10px'
			}}
		>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					login: '',
					email: '',
					password: '',
					confirmPass: '',
					subscribe: false,
					rememberMe: false
				}}
				validationSchema={SING_UP_SCHEMA}

				onSubmit={async (values) => {
					try {
						await register(values)
						setServerResult({ success: 'You successfully registered' })
					}
					catch (err) {
						setServerResult({ error: Object.values(err.response.data)[0] })
					}
				}}
			>
				{(formikProps) => {
					return (
						<Form noValidate
							onSubmit={formikProps.handleSubmit}
						>
							<Field
								component={CustomInput}
								data-testid="firstName"
								name="firstName"
								type="text"
								label="First Name"
							/>

							<Field
								component={CustomInput}
								data-testid="lastName"
								name="lastName"
								type="text"
								label="Last Name"
							/>

							<Field
								component={CustomInput}
								data-testid="login"
								name="login"
								type="text"
								label="Login"
								placeholder="Login"
							/>

							<Field
								component={CustomInput}
								data-testid="email"
								name="email"
								type="email"
								label="Email"
							/>

							<Field
								component={CustomInput}
								data-testid="password"
								name="password"
								type="password"
								label="Password"
							/>

							<Field
								component={CustomInput}
								data-testid="confirmPass"
								name="confirmPass"
								type="password"
								label="Confirm Password"
							/>

							<Box
								sx={{
									marginTop: '25px',
									paddingLeft: '15px',
								}}
							>
								<CustomSwitch 
									data-testid="rememberMe"
									name="rememberMe"
									label={
										<Typography
											component={'span'}
											sx={{
												fontSize: '14px',
												fontWeight: 300,
												lineHeight: '20px',
											}}
										>Remember me</Typography>
									}
									styles={{
										'& .MuiSwitch-switchBase': {
											'&.Mui-checked': {
												color:'#6FB7AC',
												'& + .MuiSwitch-track': {
													backgroundColor: '#6FB7AC',
												}
											},
										}}
									}
								/>
							</Box>

							<Box 
								sx={{
									marginTop: '25px',
									paddingLeft: '15px',
								}}
							>
								<CustomCheckBox 
									data-testid="subscribe"
									name="subscribe"
									styles={{
										color: '#6FB7AC',
										'&.Mui-checked': {
											color:'#6FB7AC',
										}}
									}
									label={
										<Typography
											component={'span'}
											sx={{
												fontSize: '14px',
												fontWeight: 300,
												lineHeight: '20px',
											}}
										>
											Let`s get personal! We`ll send you only the good 
											stuff: Exclusive early access to Sale, new arrivals 
											and promotions. No nasties.
										</Typography>
									}
								/>
							</Box>

							<p className={classes.policy}>By signing up you agree to
								<Link to="/info/terms-of-service"> Terms of Service </Link>
								and <Link to="/info/privacy-policy"> Privacy Policy </Link>
							</p>

							{serverResult && serverResult.error && (
								<Box className={classes.formStatusBlock}>
									<p className={classes.error}>{serverResult.error}</p>
								</Box>
							)}

							{serverResult && serverResult.success && (
								<Box className={classes.formStatusBlock}>
									<p className={classes.success}>{serverResult.success}</p>
								</Box>
							)}
							<Box sx={{ display: 'flex', justifyContent: 'center' }}>
								<Button
									type='submit'
									variant="contained"
									direction="form"
									disabled={
										!formikProps.isValid ||
										formikProps.isSubmitting
									}
								>
									sign up
								</Button>
							</Box>
						</Form>
					)
				}}
			</Formik>
		</Box>
	)
}

export default SignInForm