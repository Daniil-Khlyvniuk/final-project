
import React, { useEffect, useState } from 'react'
import { Box, } from '@mui/material'
import filterApi from '../../utils/API/filterApi'
import { filterSelectors ,filterOperations } from '../../store/Filter'
import { useDispatch, useSelector } from 'react-redux'
import {BoxSearch} from './style' //MenuSearch

import useFilterHandler from '../../utils/customHooks/useFilterHandler'

import DropDownSelect from './DropDownSelect'

const HeadSearch = () => {
	const [handleFilterChange] = useFilterHandler()
	const [perPage, setPerPage] = useState([])
	const [sortBy, setSortBy] = useState([])
	const perPageValue = useSelector(filterSelectors.getPerPage())
	const sortValue = useSelector(filterSelectors.getSort())

	const dispatch = useDispatch()

	const handlePerPage = (item) => {
		handleFilterChange('perPage', item)
	}
	const handleSort = (item) => {
		handleFilterChange('sort', item)
	}

	const getPerPageFilters = async () => {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPage(pageRes.data)
		dispatch(filterOperations.handlePerPage(pageRes.data[0].value))
	}
	const getSortByFilters = async () => {
		const sortRes = await filterApi.getFiltersByType('sortBy')
		setSortBy(sortRes.data)
		dispatch(filterOperations.handleSort(sortRes.data[0].value))
	}

	useEffect(()=> {
		getPerPageFilters()
		getSortByFilters()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])



	return (
		<Box style={BoxSearch}>
			{perPage.length && (
				<DropDownSelect
					arrayToIterate={perPage}
					selectedValue={perPageValue}
					selectHandler={handlePerPage}
					label={'Show'}
				/>
			)}
			{sortBy.length && (
				<DropDownSelect
					arrayToIterate={sortBy}
					selectedValue={sortValue}
					selectHandler={handleSort}
					label={'Sort by'}
				/>
			)}
		</Box>
	)
}

export default HeadSearch
