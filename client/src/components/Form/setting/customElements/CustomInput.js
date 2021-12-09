import React from 'react'
import PropTypes from 'prop-types'
import { useFormStyle } from '../../../../utils/customHooks/useFormStyle'
import { TextField } from '@mui/material'


const CustomInput = ({field, form, ...rest}) => {
	const {name, placeholder} = field
	const classes = useFormStyle()
	return (
		<div style={{margin: '15px 0'}}>
			<TextField className={classes.input} label={placeholder}
				{...rest}
				{...field} fullWidth={true}/>
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
