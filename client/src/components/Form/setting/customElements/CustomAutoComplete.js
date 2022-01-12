import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Autocomplete, Box } from '@mui/material'
import { useFormStyle } from '../../../../utils/customHooks/useFormStyle'
import { useFormikContext } from 'formik'

const CustomAutoComplete = ({field, form, options, ...rest}) => {
	const {  setTouched, setFieldValue } = useFormikContext()
	const classes = useFormStyle()
	const {name, placeholder} = field

	return (
		<>
			<Autocomplete
				options={options}
				getOptionLabel={options => options}
				onBlur={() => setTouched({ [name]: true })}
				onChange={(_, value) => setFieldValue(name, value)}
				renderInput={(params) => (
					<TextField
						{...params}
						placeholder={placeholder}
						{...rest}
					/>
				)}
			/>
			<Box>
				{form.touched[name] && form.errors[name] && (
					<Box className={classes.error}>{form.errors[name]}</Box>
				)}
			</Box>
		</>
	)
}

CustomAutoComplete.propTypes = {
	field: PropTypes.object,
	form: PropTypes.object,
	options: PropTypes.array,
}


export default CustomAutoComplete