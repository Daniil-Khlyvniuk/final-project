import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import useOtherColors from './useOtherColors'

const OtherVariants = ({ parentId, currColor }) => {
	const otherVariants = useOtherColors(parentId)

	const variantsComponents = otherVariants.map((variant, i) => {
		const isCurrentColor = (variant.colorID === currColor._id)

		return (
			<Link variant={ 'span' } key={ i }
				to={ `/product-details/${ variant.varId }` }>
				<Box
					sx={ {
						p: .5,
						clipPath: 'circle(50%)',
						bgcolor: () => isCurrentColor ? '#cfcfcfce' : '#3f3f3f'
					} }>
					<Box sx={ {
						clipPath: 'circle(50%)',
						width: '20px',
						aspectRatio: '1',
						bgcolor: () => variant.colorCssValue ?? '#fff'
					} } />
				</Box>
			</Link>
		)
	})

	return (
		<Box
			sx={{
				pointerEvents: 'auto',
				display: 'flex',
				flexWrap: 'wrap',
				gap: '3px'
			} }>
			{ variantsComponents }
		</Box>
	)
}


OtherVariants.propTypes = {
	parentId: PropTypes.string,
	currColor: PropTypes.object
}

export default OtherVariants