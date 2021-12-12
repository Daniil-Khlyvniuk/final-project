import React from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

const SelectInput = ({ name, options, ...rest }) => {
	const { setFieldValue } = useFormikContext()
	const [field, meta] = useField(name)
	const option = Object.keys(options).map((item) => options[item])

	const configSelect = {
		...field,
		...rest,
		variant: 'outlined',
		fullWidth: true,
		value: field.value
	}

	if (meta && meta.error && meta.touched) {
		configSelect.error = true
		configSelect.helperText = meta.error
	}

	return (
		<Autocomplete
			{...configSelect}
			disablePortal
			id='combo-box'
			options={option}
			getOptionLabel={option => option}
			onChange={(e, value) => {
				setFieldValue(
					'country',
					value
				)
			}}
			renderInput={(params) => (
				<TextField {...params} />
			)}
		/>
	)
}

SelectInput.propTypes = {
	name: PropTypes.string,
	options: PropTypes.object,
}

export default SelectInput