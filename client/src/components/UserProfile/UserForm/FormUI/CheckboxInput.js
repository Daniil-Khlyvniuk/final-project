import React from 'react'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@mui/material'
import { useField, useFormikContext } from 'formik'

// eslint-disable-next-line react/prop-types,no-unused-vars
const CheckboxInput = ({ name, label, legend, ...rest }) => {
	const { setFieldValue } = useFormikContext()
	const [field, meta] = useField(name)

	const handleChange = (e) => {
		const { checked } = e.target
		setFieldValue(name, checked)
	}

	const configCheckbox = {
		...field,
		onChange: handleChange,
	}

	const configFormControl = {}
	if (meta && meta.touched && meta.error) {
		configFormControl.error = true
	}

	return (
		<FormControl {...configFormControl}>
			<FormLabel component="legend">{legend}</FormLabel>
			<FormGroup>
				<FormControlLabel
					control={<Checkbox {...configCheckbox} />}
					label={label}
				/>
			</FormGroup>
		</FormControl>
	)
}

export default CheckboxInput
