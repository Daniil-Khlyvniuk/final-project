import React from 'react'
import { useFormStyle } from '../../../utils/customHooks/useFormStyle'
import { Field, Form, Formik } from 'formik'
import {SING_UP_SCHEMA} from '../setting/Schemes'
import CustomInput from '../setting/CustomInput'
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'

const LoginForm = () => {
	const classes = useFormStyle()
	return (
		<Formik initialValues={{
			email: '',
			password: '',
		}}

		validationSchema={SING_UP_SCHEMA}
		onSubmit={(values, { setSubmitting }) => {
			setSubmitting(false)
		}}
		>
			{(formikProps) => {
				return (
					<Form noValidate
						onSubmit={formikProps.handleSubmit}
						className={classes.form}>
						<Field
							data-testid="email"
							component={CustomInput}
							name="email"
							type="text"
							placeholder="Email"
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
							}}/>
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
						<button
							className={classes.submit}
							type="submit">
							LOG IN
						</button>

						<p className= {classes.alreadyIn}>
							<Link to="/#">FORGOT PASSWORD?</Link>
						</p>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm