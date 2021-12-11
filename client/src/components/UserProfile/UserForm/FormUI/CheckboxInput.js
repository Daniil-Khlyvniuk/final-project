import React from 'react'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel, Typography,
} from '@mui/material'
import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

const CheckboxInput = ({ name, label, legend }) => {
	const { setFieldValue } = useFormikContext()
	const [field, meta] = useField(name)

	const handleChange = (e) => {
		const { checked } = e.target
		setFieldValue(name, checked)
	}

	const configCheckbox = {
		...field,
		checked: field.value,
		onChange: handleChange,
		size: 'small',
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

					control={<Checkbox

						{...configCheckbox} />}
					label={<Typography fontSize={'12px'}>{label}</Typography>}
					labelPlacement='end'
					sx={{ '&.MuiFormControlLabel-label': { fontSize: '10px' } }}
				/>
			</FormGroup>
		</FormControl>
	)
}

CheckboxInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	legend: PropTypes.element,
}

export default CheckboxInput