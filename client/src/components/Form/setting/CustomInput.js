import React from 'react'
import Input from '@mui/material/Input'
import PropTypes from 'prop-types'
import { useFormStyle } from '../../../utils/customHooks/useFormStyle'

const CustomInput = ({field, form, ...rest}) => {
	const {name} = field
	const classes = useFormStyle()
	return (
		<div>
			<Input className={classes.input} {...rest} {...field} fullWidth={true}/>
			<div>
				{form.touched[name] && form.errors[name] && (
					<div className={classes.error}>{form.errors[name]}</div>
				)}
			</div>
		</div>
	)
}

CustomInput.propTypes = {
	field: PropTypes.object,
	form: PropTypes.object
}

export default CustomInput
