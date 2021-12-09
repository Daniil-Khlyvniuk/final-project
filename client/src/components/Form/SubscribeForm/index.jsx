import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, Alert } from '@mui/material'
import { SUBSCRIBE_SCHEMA } from '../setting/Schemes'
import TextInput from '../setting/TextInput'
import useSnack from '../../../utils/customHooks/useSnack'
import { addSubscribe } from '../../../utils/API/subscribersAPI'
import { styled } from '@mui/material/styles'

const StyledForm = styled(Form)(() => ({
	display: 'flex',
	width: '100%',
}))

const StyledAlert = styled(Alert)(() => ({
	width: '100%',
}))

const SubscribeForm = () => {
	const {handleSnack} = useSnack()
	const [subscribeStatus, setSubscribeStatus] = useState(null)
	const handleSubmit = async ({ email }, formikFunctions) => {
		try {
			const res = await addSubscribe(email)
			if (res.status === 200) {
				setSubscribeStatus({ success: 'You successfully subscribed!' })
				handleSnack({message: 'You successfully subscribed', style: 'success'})
			}
		}
		catch (er) {
			setSubscribeStatus({ error: er.response.data.message })
			handleSnack({message: er.response.data.message, style: 'warning'})
		}
		formikFunctions.resetForm()
		setTimeout(() => setSubscribeStatus(null), 5000)
	}

	return (
		<Formik
			initialValues={{ email: '' }}
			validationSchema={SUBSCRIBE_SCHEMA}
			onSubmit={handleSubmit}
		>
			{(formikProps) => (
				<>
					<StyledForm noValidate>
						<Field
							component={TextInput}
							type="email"
							placeholder="e-mail"
							name="email"
							onBlur={formikProps.handleBlur}
							onChange={formikProps.handleChange}
							error={true}
							asyncborderradius={'on'}
							fullWidth={true}
						/>

						<Button
							type='submit'
							variant="contained"
							disabled={
								!formikProps.isValid ||
								formikProps.isSubmitting
							}
							asyncborderradius={'on'}
							sx={{
								paddingLeft: '40px',
								paddingRight: '40px',
							}}
						>
							send
						</Button>
					</StyledForm>

					{!formikProps.isValid && (
						<StyledAlert
							severity="error"
							icon={false}
						>
							{formikProps.errors.email}
						</StyledAlert>
					)}
					{subscribeStatus && subscribeStatus['success'] && (
						<StyledAlert
							icon={false}
							severity="success"
						>
							{subscribeStatus.success}
						</StyledAlert>
					)}
					{subscribeStatus && subscribeStatus['error'] && (
						<StyledAlert
							icon={false}
							severity="success"
						>
							{subscribeStatus.error}
						</StyledAlert>
					)}
				</>
			)}
		</Formik>
	)
}

export default SubscribeForm
