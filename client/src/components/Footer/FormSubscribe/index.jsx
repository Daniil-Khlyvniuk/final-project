import React from 'react'
import {Formik, Form} from 'formik'
import {Button, TextField, Alert} from '@mui/material'
import * as yup from 'yup'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	formStyle: {
		display: 'flex',
		width: '100%',
	}
}))

const isRequiredError = 'This field is required'
const userFormSchema = yup.object().shape({
	email: yup.string().required(isRequiredError).email('Enter correct email'),
})

const FormSibscribe = () => {
	const handleSubmit = () => {
  
	}

	const {formStyle} = useStyles()

	return (
		<Formik
			initialValues={{}}
			validationSchema={userFormSchema}
			onSubmit={handleSubmit}
		>
			{(formikProps) => (
				<>
					<Form noValidate 
						className={formStyle}
					>

						<TextField 
							type="email" 
							placeholder="e-mail"
							name="email"
							onBlur={formikProps.handleBlur}
							onChange={formikProps.handleChange}
							error={true}
							sx={{

								outline: 'none',
								borderRadius: '0px',
							}}
						/>

						<Button 
							type='submit'
							variant="contained"
							color="primary"
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
