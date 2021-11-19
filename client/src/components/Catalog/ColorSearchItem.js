import React from 'react'
import { Box, ToggleButton } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import {useSelector, useDispatch} from 'react-redux'
import {filterSelectors, filterOperations} from '../../store/Filter'
import PropTypes from 'prop-types'

const ColorSearchItem = ({color}) => {
	const {name, cssValue} = color
	const isSelected = useSelector(filterSelectors.checkColor(name))
	const dispatch = useDispatch()

	return (
		<Box sx={{display: 'inline-block'}}>
			<ToggleButton 
				aria-label={name} 
				color={'neutral'} 
				sx={{border: 'none', padding: '0', mr:'10px'}}
			>
				<CircleIcon 
					stroke-width={1} 
					stroke={isSelected ? 'black' : 'transparent'}
					fontSize={'medium'}
					sx={{color: cssValue, opacity: () => isSelected ? '1' : '0.7' }}
					onClick={() => dispatch(filterOperations.handleColor(name))}
				/>
			</ToggleButton>
		</Box>
	
	)
}

ColorSearchItem.propTypes = {
	color: PropTypes.shape({
		name: PropTypes.string,
		cssValue: PropTypes.string,
	})
}

export default ColorSearchItem
