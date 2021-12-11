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

const CustomCheckBox = ({ name, label, legend, styles}) => { //checked , ...rest 
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
		size:'medium',
		sx: styles,
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
					control={
						<Checkbox
							{...configCheckbox} 
						/>
					}
					label={<Typography fontSize={'12px'}>{label}</Typography>}
					labelPlacement='end'
					sx={{'&.MuiFormControlLabel-label' :{fontSize:'10px'}}}
				/>
			</FormGroup>
		</FormControl>
	)
}

CustomCheckBox.propTypes = {
	name: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	legend: PropTypes.string,
	styles: PropTypes.object,
}

export default CustomCheckBox
