import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import {useSelector, useDispatch} from 'react-redux'
import {filterSelectors, filterOperations} from '../../store/Filter'
import PropTypes from 'prop-types'

const ColorSearchItem = ({color}) => {
	const {name, cssValue} = color
	const isSelected = useSelector(filterSelectors.checkColor(name))
	const dispatch = useDispatch()

	return (
		<ToggleButtonGroup 
			exclusive
		>
			<ToggleButton 
				aria-label={name} 
				color={'neutral'} 
				sx={{border: 'none', padding: '0', mr:'10px'}}
			>
				<CircleIcon 
					stroke-width={1} 
					stroke={isSelected ? 'black' : 'white'}
					sx={{width: '20px', color: cssValue }}
					onClick={() => dispatch(filterOperations.handleColor(name))}
				/>
			</ToggleButton>
		</ToggleButtonGroup>
	)
}

ColorSearchItem.propTypes = {
	color: PropTypes.shape({
		name: PropTypes.string,
		cssValue: PropTypes.string,
	})
}

export default ColorSearchItem
