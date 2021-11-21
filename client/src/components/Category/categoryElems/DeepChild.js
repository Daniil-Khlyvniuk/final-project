import React from 'react'
import { StyledMenuItem } from './style'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const DeepChild = ({ text }) => {
	return (
		<Link
			to={`/shop/catalog?category=${text}`}
			style={{ textDecoration: 'none' }}
		>
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