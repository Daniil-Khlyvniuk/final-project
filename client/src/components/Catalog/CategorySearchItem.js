import React from 'react'
import {Button} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import {filterSelectors, filterOperations} from '../../store/Filter'
import PropTypes from 'prop-types'

const CategorySearchItem = ({catalog}) => {
	const {name} = catalog
	const isSelected = useSelector(filterSelectors.checkCategory(name))
	const dispatch = useDispatch()
	return (
		<Button
			color="primary"
			variant={isSelected ? 'contained' : 'outlined'}
			onClick={() => dispatch(filterOperations.handleCategory(name))}
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
