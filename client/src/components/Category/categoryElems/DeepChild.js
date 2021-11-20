import React from 'react'
import { StyledMenuItem } from './style'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DeepChild = ({ text }) => {
	return (
		<Link to={`/api/products/filter?category=${text}`}>
			<StyledMenuItem>
				{text}
			</StyledMenuItem>
		</Link>
	)
}

DeepChild.propTypes = {
	text: PropTypes.string.isRequired,
}

export default DeepChild