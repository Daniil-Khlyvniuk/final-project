import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as schema from './Schemes'
import CustomInput from './CustomInput'


const From = () => {
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
					<Form noValidate onSubmit={formikProps.handleSubmit}>
						<div>
							<Field
								data-testid = "name"
								component={CustomInput}
								name="name"
								type="text"
								placeholder="Name"
							/>
						</div>

						<div>
							<Field
								data-testid = "email"
								component={CustomInput}
								name="email"
								type="text"
								placeholder="Email"
							/>
						</div>

						<div>
							<Field
								data-testid = "password"
								component={CustomInput}
								name="password"
								type="text"
								placeholder="Password"
							/>
						</div>

						<div>
							<Field
								data-testid = "confirmPass"
								component={CustomInput}
								name="confirmPass"
								type="text"
								placeholder="Confirm Password"
							/>
						</div>
						<div>
							<button
								className={'sbmt-button'}
								type="submit">Checkout</button>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}

export default From