import React from 'react'
import { StyledMenuItem } from '../style'

// eslint-disable-next-line react/prop-types
const DeepChild = ({ text, handleClick, handleMouseEnter }) => {
	// eslint-disable-next-line react/prop-types
	return (
		<StyledMenuItem
			sx={ { zIndex: 1 } }
			onMouseEnter={ handleMouseEnter }
			onClick={ handleClick }
		>
			{ text }
		</StyledMenuItem>
	)
}

export default DeepChild