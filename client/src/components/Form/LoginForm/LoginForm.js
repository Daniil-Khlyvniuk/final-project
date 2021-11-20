import React, { useState } from 'react'
import { useFormStyle } from '../../../utils/customHooks/useFormStyle'
import { Field, Form, Formik } from 'formik'
import { LOGIN_SCHEMA } from '../setting/Schemes'
import CustomInput from '../setting/CustomInput'
import { Box, Button, Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'
import { loginUser } from '../../../utils/API/userAPI'
import { useDispatch } from 'react-redux'
import modalActions from '../../../store/Modal'
import { userOperations } from '../../../store/User'

const LoginForm = () => {
	const classes = useFormStyle()
	const [serverResult, setServerResult] = useState(null)
	const dispatch = useDispatch()
	return (
		<Formik initialValues={{
			loginOrEmail: '',
			password: '',
			subscribe: false,
		}}

		validationSchema={LOGIN_SCHEMA}
		onSubmit={async values => {
			try {
				const res = await loginUser(values)

				if (res.status === 200) {
					//save token to store (and localStorage)
					dispatch(userOperations.setToken(res.data.token))

					setServerResult({ success: 'You successfully Logged In' })
					setTimeout(() => {
						setServerResult(null)
						dispatch(modalActions.modalToggle(false))
					}, 5000)
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
							data-testid="loginOrEmail"
							component={CustomInput}
							name="loginOrEmail"
							type="text"
							placeholder="Login or Email"
						/>
						<Field
							data-testid="password"
							component={CustomInput}
							name="password"
							type="password"
							placeholder="Password"
						/>
						<div className={classes.ads}>
							<Checkbox style={{
								width: 20,
								padding: 25,
								height: 20,
								color: '#6FB7AC',
							}}
							name="subscribe"
							type="checkbox"
							onBlur={formikProps.handleBlur}
							onChange={formikProps.handleChange}
							/>
							<p>
								Let`s get personal!
								We`ll send you only the good stuff:
								Exclusive early
								access to Sale, new arrivals and promotions.
								No nasties.
							</p>
						</div>
						<p className={classes.policy}>By signing up you agree to
							<Link to="/termsOfService"> Terms of Service </Link>  and <Link to="/privacypolicy"> Privacy Policy </Link>
						</p>

						{serverResult && serverResult.error && (
							<div className={classes.formStatusBlock}>
								<p className={classes.error}>{serverResult.error}</p>
							</div>
						)}

						{serverResult && serverResult.success && (
							<div className={classes.formStatusBlock}>
								<p className={classes.success}>{serverResult.success}</p>
							</div>
						)}

						<Box sx={{ display: 'flex', justifyContent: 'center' }}>
							<Button
								type='submit'
								variant="contained"
								sx={{
									padding: '10px 90px',
									fontSize: '18px',
									fontFamily: 'Abel',
									fontWeight: '400',
								}}
								disabled={
									!formikProps.isValid ||
									formikProps.isSubmitting
								}
							>
								log in
							</Button>
						</Box>

						<p className={classes.alreadyIn}>
							<Link to="/#">FORGOT PASSWORD?</Link>
						</p>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm