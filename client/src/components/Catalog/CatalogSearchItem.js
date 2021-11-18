import React from 'react'
import {Button} from '@mui/material'
import {useSelector,useDispatch} from 'react-redux'
import {filterSelectors,filterOperations} from '../../store/Filter'
import PropTypes from 'prop-types'

const CatalogSearchItem = ({catalog}) => {
	const {name} = catalog
	const dispatch = useDispatch()
	const isSelected = useSelector(filterSelectors.checkCategory(name))
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


CatalogSearchItem.propTypes = {
	catalog: PropTypes.shape({
		name: PropTypes.string,
	})
}

export default CatalogSearchItem
