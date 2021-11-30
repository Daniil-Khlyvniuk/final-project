/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { Box, } from '@mui/material'
import filterApi from '../../utils/API/filterApi'
import { filterSelectors ,filterOperations } from '../../store/Filter'
import { useDispatch, useSelector } from 'react-redux'
import {BoxSearch} from './style' //MenuSearch

import useFilterHandler from '../../utils/customHooks/useFilterHandler'

import DropDownSelect from './DropDownSelect'

const HeadSearch = () => {
	const {handleFilterChange} = useFilterHandler()
	const [perPageArray, setPerPageArray] = useState([])
	const [sortByArray, setSortByArray] = useState([])
	const {perPage, sort} = useSelector(filterSelectors.getFilters())

	const dispatch = useDispatch()

	const handlePerPage = (item) => {
		handleFilterChange('perPage', item)
	}
	const handleSort = (item) => {
		handleFilterChange('sort', item)
	}

	const getPerPageFilters = async () => {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPageArray(pageRes.data)
	}
	const getSortByFilters = async () => {
		const sortRes = await filterApi.getFiltersByType('sortBy')
		setSortByArray(sortRes.data)
	}

	useEffect(()=> {
		getPerPageFilters()
		getSortByFilters()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<Box style={BoxSearch}>
			{perPageArray.length && (
				<DropDownSelect
					arrayToIterate={perPageArray}
					selectedValue={perPage}
					selectHandler={handlePerPage}
					label={'Show'}
				/>
			)}
			{sortByArray.length && (
				<DropDownSelect
					arrayToIterate={sortByArray}
					selectedValue={sort}
					selectHandler={handleSort}
					label={'Sort by'}
				/>
			)}
		</Box>
	)
}

export default HeadSearch
