import React from 'react'
import PropTypes from 'prop-types'
import {TextField} from '@mui/material'

const TextInput = ({field,...all}) => {
	return (
		<TextField {...field} {...all} />
	)
}

TextInput.propTypes = {
	field: PropTypes.object,
}

export default TextInput
