import React from 'react'
import {Button} from '@mui/material'
import {useSelector} from 'react-redux'
import {filterSelectors} from '../../store/filter'
import useFilterHandler from '../../utils/customHooks/useFilterHandler'
import PropTypes from 'prop-types'

const CategorySearchItem = ({catalog}) => {
	const {handleFilterChange} = useFilterHandler()
	const {name} = catalog
	const isSelected = useSelector(filterSelectors.checkCategory(name))

	const handler = () => {
		handleFilterChange('category', name)
	}
	return (
		<Button
			color="primary"
			variant={isSelected ? 'contained' : 'outlined'}
			onClick={handler}
		>
			{name}
		</Button>
	)
}

CategorySearchItem.propTypes = {
	catalog: PropTypes.shape({
		name: PropTypes.string,
	})
}

export default CategorySearchItem
