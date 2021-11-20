import React from 'react'
import { StyledMenuItem } from './style'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

const DeepChild = ({ text }) => {
	let history = useHistory()
	// ...?category=${text}
	return (
		// eslint-disable-next-line max-len
		<StyledMenuItem onClick={() => history.push(`/api/products/filter?category=${text}`)}>
			{ text }
		</StyledMenuItem>
	)
}

DeepChild.propTypes = {
	text: PropTypes.string.isRequired,
}

export default DeepChild