import React from 'react'
import {
	Switch,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel, Typography,
} from '@mui/material'
import { useField, useFormikContext } from 'formik'
import PropTypes from 'prop-types'

const CustomSwitch = ({ name, label, legend, styles}) => {
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
						<Switch
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

CustomSwitch.propTypes = {
	name: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	legend: PropTypes.string,
	styles: PropTypes.object,
}

export default CustomSwitch
