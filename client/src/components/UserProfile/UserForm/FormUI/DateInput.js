import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const DateInput = ({ name, ...rest }) => {
	const [field, meta] = useField(name)

	const configDateInput = {
		...field,
		...rest,
		type: 'date',
		variant: 'outlined',
		fullWidth: true,
		InputLabelProps: {
			shrink: true,
		},
	}
	if (meta && meta.touched && meta.error) {
		configDateInput.error = true
		configDateInput.helperText = meta.error
	}

	return <TextField {...configDateInput} />
}

DateInput.propTypes = {
	name:PropTypes.string
}

export default DateInput
