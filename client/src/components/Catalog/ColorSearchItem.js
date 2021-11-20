import React from 'react'
import { ToggleButton } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import {useSelector, } from 'react-redux'
import {filterSelectors, } from '../../store/Filter'
import PropTypes from 'prop-types'

const ColorSearchItem = ({color}) => {
	const {name, cssValue} = color
	const isSelected = useSelector(filterSelectors.checkColor(name))
	// const dispatch = useDispatch()

	return (
		<ToggleButton
			aria-label={name} 
			color={'neutral'} 
			sx={{border: 'none', padding: '0', mr:'10px'}}
			// onClick={() => dispatch(filterOperations.handleColor(name))}
			value={name}
		>
			<CircleIcon 
				strokeWidth={1} 
				stroke={isSelected ? 'black' : 'transparent'}
				fontSize={'medium'}
				sx={{color: cssValue, opacity: () => isSelected ? '1' : '0.7' }}
			/>
		</ToggleButton>
	)
}

ColorSearchItem.propTypes = {
	color: PropTypes.shape({
		name: PropTypes.string,
		cssValue: PropTypes.string,
	})
}

export default ColorSearchItem
