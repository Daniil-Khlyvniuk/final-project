import React from 'react'
import {Formik, Form} from 'formik'
import {Button, TextField, Alert} from '@mui/material'
import * as yup from 'yup'

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
	const handleSubmit = () => {
  
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
							asyncBorderRadius={true}
						/>
						<Button 
							type='submit'
							variant="contained"
							disabled={
								!formikProps.isValid ||
                formikProps.isSubmitting
							}
							asyncBorderRadius={true}
						>
            send
						</Button>
					</StyledForm>

					{!formikProps.isValid && (
						<Alert severity="error"
							sx={{width: '100%'}}
						>
							{formikProps.errors.email}
						</Alert>
					)}
				</>
			)}
		</Formik>
	)
}

export default FormSibscribe
