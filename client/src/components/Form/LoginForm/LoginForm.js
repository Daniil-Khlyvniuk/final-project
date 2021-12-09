import React, { useState } from 'react'
import { useFormStyle } from '../../../utils/customHooks/useFormStyle'
import { Field, Form, Formik } from 'formik'
import { LOGIN_SCHEMA } from '../setting/Schemes'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomInput from '../setting/customElements/CustomInput'
import CustomSwitch from '../setting/customElements/CustomSwitch'

import useAuth from '../../../utils/customHooks/useAuth'


const LoginForm = () => {
	const classes = useFormStyle()
	const [serverResult, setServerResult] = useState(null)
	const {login} = useAuth()

	return (
		<Formik 
			initialValues = {{
				loginOrEmail: '',
				password: '',
				rememberMe: false,
			}}
			validationSchema = {LOGIN_SCHEMA}

			onSubmit = {async values => {
				try {
					const res = await login(values)
					if(res)
					{
						setServerResult({ success: 'You successfully Logged In' })
					}
				}
				catch (err) {
					setServerResult({ error: 'wrong login or password' })
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
							label="Login or Email"
							name="loginOrEmail"
							type="text"
						/>
						<Field
							data-testid="password"
							component={CustomInput}
							label="Password"
							name="password"
							type="password"
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
								log in
							</Button>
						</Box>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm