import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {filterSelectors, filterOperations} from '../../store/Filter'
import {Checkbox, FormControlLabel} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import PropTypes from 'prop-types'

const SearchSizeItem = ({size}) => {
	const isSelected = useSelector(filterSelectors.checkSize(size.name))
	const dispatch = useDispatch()
	const {name} = size
	return (
		<FormControlLabel
			value={name}
			control={		
				<Checkbox
					checked={isSelected}
					value={name}
					onChange={() => dispatch(filterOperations.handleSize(name))}
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
