import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as schema from '../setting/Schemes'
import CustomInput from '../setting/CustomInput'
import { useFormStyle } from '../hooks/useFormStyle'
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'
import { Facebook, Google } from '../setting/SocialIcons'

const SignInForm = () => {
	const classes = useFormStyle()
	return (
		<Formik initialValues={{
			name: '',
			email: '',
			password: '',
			confirmPass: ''
		}}
		onSubmit={(values, { setSubmitting }) => {
			alert('sbmt')
			setSubmitting(false)
		}}
		validationSchema={schema.SING_UP_SCHEMA}
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
							{formikProps.touched.name &&
              formikProps.errors.name && (
								<p className={classes.error}>
									{formikProps.errors.name}
								</p>
							)}
						</div>
						<div>
							<Field
								data-testid="email"
								component={CustomInput}
								name="email"
								type="text"
								placeholder="Email"
							/>
							{formikProps.touched.name &&
              formikProps.errors.name && (
								<p className={classes.error}>
									{formikProps.errors.name}
								</p>
							)}
						</div>
						<div>
							<Field
								data-testid="password"
								component={CustomInput}
								name="password"
								type="password"
								placeholder="Password"
							/>
							{formikProps.touched.name &&
              formikProps.errors.name && (
								<p className={classes.error}>
									{formikProps.errors.name}
								</p>
							)}
						</div>
						<div>
							<Field
								data-testid="confirmPass"
								component={CustomInput}
								name="confirmPass"
								type="password"
								placeholder="Confirm Password"
							/>
							{formikProps.touched.name &&
              formikProps.errors.name && (
								<p className={classes.error}>
									{formikProps.errors.name}
								</p>
							)}
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
							<Link to="/policy"> Terms of Service </Link>
              and <Link to="/policy"> Privacy Policy </Link>
						</p>
						<button
							className={classes.submit}
							type="submit">
              SIGN UP
						</button>
						<div className={classes.socialBox}>
							<Link to="#"><Google/></Link>
							<Link to="#"><Facebook/></Link>
						</div>
						<p className={classes.alreadyIn}>
							<Link to="/login">I HAVE AN ACCOUNT</Link>
						</p>
					</Form>
				)
			}}
		</Formik>

	)
}

export default SignInForm