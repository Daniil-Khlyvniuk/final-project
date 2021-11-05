import React, {useState} from 'react'
import {Formik, Form} from 'formik'
import {Button, TextField, Alert} from '@mui/material'
import * as yup from 'yup'

//for server subscribe
// import {addSubscriber} from '../../../utils/API/subscribersAPI'

import { styled } from '@mui/material/styles'

const StyledForm = styled(Form)(() => ({
	display: 'flex',
	width: '100%',
}))


const isRequiredError = 'This field is required'
const userFormSchema = yup.object().shape({
	email: yup.string().required(isRequiredError).email('Enter correct email'),
})

const FormSibscribe = () => {
	const [subscribeStatus, setSubscribeStatus] = useState(null)
	const handleSubmit = () => {
		// const handleSubmit = ({email}) => {
		//then import addSubscriber from API
		// addSubscriber(email)
		
		// console.log(email)
		setSubscribeStatus({ success: 'You subscribed with success!' })
		// setSubscribeStatus({ error: 'Error happened while subscription! Try later' })
		setTimeout(() => setSubscribeStatus(null), 5000)
	}

	return (
		<Formik
			initialValues={{}}
			validationSchema={userFormSchema}
			onSubmit={handleSubmit}
		>
			{(formikProps) => (
				<>
					<StyledForm noValidate>
						<TextField 
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

export default FormSibscribe
