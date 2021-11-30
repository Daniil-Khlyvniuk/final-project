import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const SelectInput = ({ name, options, ...rest }) => {
	const { setFieldValue } = useFormikContext()
	const [field, meta] = useField(name)

	const handleChange = (e) => {
		const { value } = e.target
		setFieldValue(name, value)
	}

	const configSelect = {
		...field,
		...rest,
		select: true,
		variant: 'outlined',
		fullWidth: true,
		onChange: handleChange,
	}

	if (meta && meta.error && meta.touched) {
		configSelect.error = true
		configSelect.helperText = meta.error
	}

	return (
		<TextField {...configSelect}>
			{Object.keys(options).map((item, pos) => {
				return (
					<MenuItem value={item} key={pos}>
						{options[item]}
					</MenuItem>
				)
			})}
		</TextField>
	)
}

SelectInput.propTypes = {
	name : PropTypes.string,
	options : PropTypes.object,
}

export default SelectInput
