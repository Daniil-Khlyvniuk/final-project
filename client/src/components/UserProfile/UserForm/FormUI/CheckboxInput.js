import React from 'react'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel, Typography,
} from '@mui/material'
import { useField, useFormikContext } from 'formik'



// eslint-disable-next-line react/prop-types,no-unused-vars
const CheckboxInput = ({ name, label, legend,checked , ...rest }) => {
	const { setFieldValue } = useFormikContext()
	const [field, meta] = useField(name)


	const handleChange = (e) => {
		const { checked } = e.target
		setFieldValue(name, checked)
	}

	const configCheckbox = {
		...field,
		checked : field.value,
		onChange: handleChange,
		size:'small',
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
					sx={{'&.MuiFormControlLabel-label' :{fontSize:'10px'}}}
				/>
			</FormGroup>
		</FormControl>
	)
}

export default CheckboxInput
