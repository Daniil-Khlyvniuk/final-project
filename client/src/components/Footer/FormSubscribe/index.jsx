import React from 'react'
import {Formik, Form} from 'formik'
import {Button, TextField, Alert} from '@mui/material'
import * as yup from 'yup'

import { styled } from '@mui/material/styles'

const StyledForm = styled(Form)(() => ({
	display: 'flex',
	width: '100%',
}))

const StyledTextField = styled(TextField)(() => ({
	'& .MuiOutlinedInput-root': {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	},
}))

const StyledButton = styled(Button)(() => ({
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0
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
						<StyledTextField 
							type="email" 
							placeholder="e-mail"
							name="email"
							onBlur={formikProps.handleBlur}
							onChange={formikProps.handleChange}
							error={true}
						/>
						<StyledButton 
							type='submit'
							variant="contained"
							color="primary"
							disabled={
								!formikProps.isValid ||
                formikProps.isSubmitting
							}
						>
            send
						</StyledButton>
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
