import React from 'react'
import {Checkbox, FormControlLabel} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { useSelector, useDispatch } from 'react-redux'
import { filterSelectors, filterOperations } from '../../store/Filter'
import PropTypes from 'prop-types'

const SearchSizeItem = ({size}) => {
	const {name} = size
	const isSelected = useSelector(filterSelectors.checkSize(name))
	const dispatch = useDispatch()
	
	return (
		<FormControlLabel
			value={name}
			control={		
				<Checkbox
					checked={isSelected}
					value={name}
					onClick={() => dispatch(filterOperations.handleSize(name))}
					icon={<RadioButtonUncheckedIcon />}
					checkedIcon={<RadioButtonCheckedIcon />}
				/>
			}
			label={name}
		/>
	)
}


SearchSizeItem.propTypes = {
	size: PropTypes.shape({
		name: PropTypes.string,
	})
}

export default SearchSizeItem
