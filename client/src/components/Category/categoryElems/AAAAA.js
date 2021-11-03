import React from 'react'
import Paper from '@mui/material/Paper'

// eslint-disable-next-line react/prop-types
const Aaaaa = ({ children, ...props }) => {
	return (
		<div
			className={ 'XYN' }
		>
			{ 'assdasdasda' }
			<Paper

				{ ...props }>
				{ children }
			</Paper>
		</div>
	)
}

export default Aaaaa