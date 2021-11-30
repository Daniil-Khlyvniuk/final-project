import React from 'react'
import { Button } from '@mui/material'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'


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

ButtonInput.propTypes = {
	children : PropTypes.string
}

export default ButtonInput
