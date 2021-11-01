import React from 'react'
import { StyledMenuItem } from '../style'

// eslint-disable-next-line react/prop-types
const DeepChild = ({ text, handleClick }) => {
	// eslint-disable-next-line react/prop-types
	return (
		<StyledMenuItem onClick={ handleClick }>
			{ text }
		</StyledMenuItem>
	)
}

export default DeepChild