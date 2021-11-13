import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {SING_UP_SCHEMA} from '../setting/Schemes'
import CustomInput from '../setting/CustomInput'
import { useFormStyle } from '../../../utils/customHooks/useFormStyle'
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'
import { Facebook, Google } from '../setting/SocialIcons'
import {registerUser} from '../../../utils/API/userAPI'
import {useDispatch} from 'react-redux'
import modalActions from '../../../store/Modal'

const SignInForm = () => {
	const [serverResult,setServerResult] = useState(null)
	const dispatch = useDispatch()

	const classes = useFormStyle()
	return (
		<Formik initialValues={{
			firstName: '',
			lastName: '',
			login: '',
			email: '',
			password: '',
			confirmPass: '',
			subscribe: false,
		}}
		onSubmit={ async (values) => {
			try{
				delete(values.confirmPass)
				const res = await registerUser(values)
				if(res.status === 200)
				{
					setServerResult({success: 'You successfully registered. Now you need to login'})
					setTimeout(() => {
						setServerResult(null)
						dispatch(modalActions.modalToggle(false))
					}, 5000)
				}
			}
			catch(err) {
				setServerResult({error: Object.values(err.response.data)[0]})
			}
		}}
		validationSchema={SING_UP_SCHEMA}
		>
			{(formikProps) => {
				return (
					<Form noValidate
						onSubmit={formikProps.handleSubmit}
						className={`${classes.form} ${classes.formAuth}`}>
						<div>
							<Field
								component={CustomInput}
								name="firstName"
								type="text"
								placeholder="First Name"
							/>
						</div>
						<div>
							<Field
								component={CustomInput}
								name="lastName"
								type="text"
								placeholder="Last Name"
							/>
						</div>
						<div>
							<Field
								component={CustomInput}
								name="login"
								type="text"
								placeholder="Login"
							/>
						</div>
						<div>
							<Field
								component={CustomInput}
								name="email"
								type="email"
								placeholder="Email"
							/>
						</div>
						<div>
							<Field
								component={CustomInput}
								name="password"
								type="password"
								placeholder="Password"
							/>
						</div>
						<div>
							<Field
								component={CustomInput}
								name="confirmPass"
								type="password"
								placeholder="Confirm Password"
							/>
						</div>
						<div className={classes.ads}>
							<Checkbox 
								style={{
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
							<p>Let`s get personal! We`ll send you only the good stuff:
							Exclusive early access to Sale,
							new arrivals and promotions. No nasties.
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

						{serverResult && serverResult.success &&  (
							<div className={classes.formStatusBlock}>
								<p className={classes.success}>{serverResult.success}</p>
							</div>
						)}
						
						<button
							className={classes.submit}
							type="submit"
							disabled={
								!formikProps.isValid ||
                formikProps.isSubmitting
							}
						>
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