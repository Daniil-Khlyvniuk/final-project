import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { SING_UP_SCHEMA } from '../setting/Schemes'
import CustomInput from '../setting/CustomInput'
import { useFormStyle } from '../../../utils/customHooks/useFormStyle'
import { Box, Typography, Checkbox, Button, Switch, Link as LinkMui } from '@mui/material'
import { Link } from 'react-router-dom'
import { Facebook, Google } from '../setting/SocialIcons'

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
					rememberMe: false,
				}}
				validationSchema={SING_UP_SCHEMA}

				onSubmit={async (values) => {
					try {
						const res = await register(values)
						if (res) {
							setServerResult({ success: 'You successfully registered' })
						}
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
								placeholder="First Name"
							/>

							<Field
								component={CustomInput}
								data-testid="lastName"
								name="lastName"
								type="text"
								placeholder="Last Name"
							/>

							<Field
								component={CustomInput}
								data-testid="login"
								name="login"
								type="text"
								placeholder="Login"
							/>

							<Field
								component={CustomInput}
								data-testid="email"
								name="email"
								type="email"
								placeholder="Email"
							/>

							<Field
								component={CustomInput}
								data-testid="password"
								name="password"
								type="password"
								placeholder="Password"
							/>

							<Field
								component={CustomInput}
								data-testid="confirmPass"
								name="confirmPass"
								type="password"
								placeholder="Confirm Password"
							/>

							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									marginTop: '25px',
									textTransform: 'capitalize',
									padding: '5px',
								}}>
								<Typography>remember me</Typography>
								<Field
									component={Switch}
									name="rememberMe"
									id="rememberMe"
									value={true}
									onChange={formikProps.handleChange}
								/>
							</Box>

							<Box className={classes.ads}>
								<Checkbox
									style={{
										width: 20,
										padding: 25,
										height: 20,
										color: '#6FB7AC',
									}}
									data-testid="subscribe"
									name="subscribe"
									type="checkbox"
									onChange={formikProps.handleChange}
								/>
								<p>Let`s get personal! We`ll send you only the good stuff:
									Exclusive early access to Sale,
									new arrivals and promotions. No nasties.
								</p>
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
							<div className={classes.socialBox}>
								<LinkMui
									href="https://myaccount.google.com"
									target="_blank"
								>
									<Google />
								</LinkMui>
								<LinkMui
									href="https://www.facebook.com"
									target="_blank"
								>
									<Facebook />
								</LinkMui>
							</div>
						</Form>
					)
				}}
			</Formik>
		</Box>
	)
}

export default SignInForm