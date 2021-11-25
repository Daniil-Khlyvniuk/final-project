import React from 'react'
import { Button } from '@mui/material'
import { useFormikContext } from 'formik'

// eslint-disable-next-line react/prop-types,no-unused-vars
const ButtonInput = ({ children, ...rest }) => {
	const { submitForm } = useFormikContext()

	const handleSubmit = () => {
		submitForm()
	}

	const configButton = {
		...rest,
		variant: 'contained',
		color: 'primary',
		fullWidth: false,
		onClick: handleSubmit,

	}

	return <Button {...configButton}>{children}</Button>
}

export default ButtonInput
