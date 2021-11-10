import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {Button, Alert} from '@mui/material'

import {SUBSCRIBE_SCHEMA} from '../setting/Schemes'
import TextInput from '../setting/TextInput'

import {addSubscribe} from '../../../utils/API/subscribersAPI'

import { styled } from '@mui/material/styles'

const StyledForm = styled(Form)(() => ({
	display: 'flex',
	width: '100%',
}))

const SubscribeForm = () => {
	const [subscribeStatus, setSubscribeStatus] = useState(null)
	const handleSubmit = async ({email}, formikFunctions) => {
		try{
			const res = await addSubscribe(email)
			if(res.status === 200)
			{
				setSubscribeStatus({ success: 'You successfully subscribed!' })
			}
		}
		catch(er)
		{
			setSubscribeStatus({ error: er.response.data.message })
		}
		formikFunctions.resetForm()
		setTimeout(() => setSubscribeStatus(null), 5000)
	}

	return (
		<Formik
			initialValues={{email: ''}}
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
						/>
						
						<Button 
							type='submit'
							variant="contained"
							disabled={
								!formikProps.isValid ||
                formikProps.isSubmitting
							}
							asyncborderradius={'on'}
						>
            send
						</Button>
					</StyledForm>

					{!formikProps.isValid && (
						<Alert 
							severity="error"
							icon={false}
							sx={{width: '100%'}}
						>
							{formikProps.errors.email}
						</Alert>
					)}
					{subscribeStatus && subscribeStatus['success'] && (
						<Alert icon={false} severity="success"
							sx={{ width: '100%' }}
						>
							{subscribeStatus.success}
						</Alert>
					)}
					{subscribeStatus && subscribeStatus['error'] && (
						<Alert icon={false} severity="success"
							sx={{ width: '100%' }}
						>
							{subscribeStatus.error}
						</Alert>
					)}
				</>
			)}
		</Formik>
	)
}

export default SubscribeForm
