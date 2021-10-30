import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as schema from './Schemes'
import CustomInput from './CustomInput'
import {useFormStyle} from './hooks/useFormStyle'
import {Checkbox} from '@mui/material'


const From = () => {
	const classes = useFormStyle()
	return (
		<Formik initialValues={{
			name: '',
			email: '',
			password: '',
			confirmPass: ''
		}}

		onSubmit={(values, {setSubmitting}) => {
			// eslint-disable-next-line no-console
			console.log(JSON.stringify(values, null, 2))
			setSubmitting(false)
		}} validationSchema={schema.SING_UP_SCHEMA}
		>
			{(formikProps) => {
				return (
					<Form noValidate
						onSubmit={formikProps.handleSubmit}
						className={classes.form}>

						<Field
							data-testid="name"
							component={CustomInput}
							name="name"
							type="text"
							placeholder="Name"
						/>
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
							type="text"
							placeholder="Password"
						/>
						<Field
							data-testid="confirmPass"
							component={CustomInput}
							name="confirmPass"
							type="text"
							placeholder="Confirm Password"
						/>
						<div className={classes.ads}>
							<Checkbox style={{width: 20,
								padding: 25,
								height:20,
								color: '#6FB7AC',
							}}/>
							<p>
                Let`s get personal!
                We`ll send you only the good stuff: Exclusive early
                access to Sale, new arrivals and promotions.
                No nasties.
							</p>
						</div>
						<p>By signing up you agree to
							Terms of Service and Privacy Policy</p>
						<button
							className={classes.submit}
							type="submit">
              SING UP
						</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default From