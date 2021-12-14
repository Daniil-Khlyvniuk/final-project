import React from 'react'
import {Checkbox, FormControlLabel} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { useSelector } from 'react-redux'
import { filterSelectors } from '../../store/filter'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'
import PropTypes from 'prop-types'

const SearchSizeItem = ({size}) => {
	const {handleFilterChange} = useFilterHandler()
	const {name} = size
	const isSelected = useSelector(filterSelectors.checkSize(name))

	const handleChange = () =>
	{
		handleFilterChange('size', name)
	}
	
	return (
		<FormControlLabel
			value={name}
			control={		
				<Checkbox
					checked={isSelected}
					value={name}
					onChange={handleChange}
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
