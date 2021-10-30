import React from 'react'
import {Formik, Form} from 'formik'
import {Box, Button, TextField, Alert} from '@mui/material'
import * as yup from 'yup'

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
					<Form noValidate 
						style={{
							display: 'flex',
							width: '100%',
						}}
					>
						<Box>
							<TextField 
								type="email" 
								placeholder="e-mail"
								name="email"
								onBlur={formikProps.handleBlur}
								onChange={formikProps.handleChange}
								error={true}
							/>
						</Box>
						<Button 
							type={'submit'}
							variant="contained"
							color="inherit"
							disabled={
								!formikProps.isValid ||
                formikProps.isSubmitting
							}
						>
            sent
						</Button>
					</Form>

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
