import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const TextInput = ({ name,...rest }) => {
	const [field, meta] = useField(name)

	const configTextfield = {
		...field,
		...rest,
		fullWidth: true,
		variant: 'outlined',
	}
	if (meta && meta.touched && meta.error) {
		configTextfield.error = true
		configTextfield.helperText = meta.error
	}
	return <TextField {...configTextfield} />
}

TextInput.propTypes = {
	name : PropTypes.string
}

export default TextInput
