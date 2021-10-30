import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as schema from '../setting/Schemes'
import CustomInput from '../setting/CustomInput'
import { useFormStyle } from '../hooks/useFormStyle'
import { Checkbox } from '@mui/material'
// import {InstagramIcon, FacebookIcon, TwitterIcon} from '@mui/icons-material'
// import  from '@mui/icons-material/Facebook'
// import  from '@mui/icons-material/Instagram'

const SignInForm = () => {
	const classes = useFormStyle()
	return (
		<Formik initialValues={{
			name: '',
			email: '',
			password: '',
			confirmPass: ''
		}}
		validationSchema={schema.SING_UP_SCHEMA}

		onSubmit={(values, { setSubmitting }) => {
			// eslint-disable-next-line no-console
			console.log(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}}
		>
			{(formikProps) => {
				return (
					<Form noValidate
						onSubmit={formikProps.handleSubmit}
						className={classes.form}>
						<div>
							<Field
								data-testid="name"
								component={CustomInput}
								name="name"
								type="text"
								placeholder="Name"
							/>

						</div>
						<div>
							<Field
								data-testid="email"
								component={CustomInput}
								name="email"
								type="text"
								placeholder="Email"
							/>
						</div>
						<div>
							<Field
								data-testid="password"
								component={CustomInput}
								name="password"
								type="password"
								placeholder="Password"
							/>
						</div>
						<div>
							<Field
								data-testid="confirmPass"
								component={CustomInput}
								name="confirmPass"
								type="password"
								placeholder="Confirm Password"
							/>
						</div>
						<div className={classes.ads}>
							<Checkbox style={{
								width: 20,
								padding: 25,
								height: 20,
								color: '#6FB7AC',
							}}/>
							<p>
							Let`s get personal!
							We`ll send you only the good stuff: Exclusive early
							access to Sale, new arrivals and promotions.
							No nasties.
							</p>
						</div>
						<p className={classes.policy}>By signing up you agree to
						Terms of Service and Privacy Policy
						</p>
						<button
							className={classes.submit}
							type="submit">
						SIGN UP
						</button>
					</Form>
				)
			}}
		</Formik>

	)
}

export default SignInForm