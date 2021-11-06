import React from 'react'
import { StyledMenuItem } from './style'
import PropTypes from 'prop-types'

const DeepChild = ({ text }) => {
	return (
		<StyledMenuItem>
			{ text }
		</StyledMenuItem>
	)
}

DeepChild.propTypes = {
	text: PropTypes.string.isRequired,
}

export default DeepChild