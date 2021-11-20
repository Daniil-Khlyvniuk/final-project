import React, { useEffect, useState } from 'react'
import {Box, NativeSelect } from '@mui/material'
import filterApi from '../../utils/API/filterApi'
import { useDispatch } from 'react-redux'
import { filterOperations } from '../../store/Filter'

const HeadSearch = () => {

	const [perPage, setPerPage] = useState([])
	const [sortBy, setSortBy] = useState([])
	const dispatch = useDispatch()

	const getPerPageFilters = async () => {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPage(pageRes.data)
		dispatch(filterOperations.setPerPage(pageRes.data[0].value))
	}
	const getSortByFilters = async () => {
		const sortRes = await filterApi.getFiltersByType('sortBy')
		setSortBy(sortRes.data)
		dispatch(filterOperations.setSort(sortRes.data[0].value))
	}

	useEffect(()=> {
		getPerPageFilters()
		getSortByFilters()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	return (
		<Box 
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				margin: 'auto',
			}}
		>
			{perPage.length && (
				<NativeSelect
					margin={'50px'}
					variant={'outlined'}
					inputProps={{
						name: 'count',
						id: 'uncontrolled-native',
					}}
					onChange={(event) => 
						dispatch(filterOperations.setPerPage(event.target.value))}
				>
					{perPage.map((item)=>
						<option key={item._id} value={item.value}>{item.name}</option>)}
				</NativeSelect>
			)}
			<NativeSelect
				margin={'50px'}
				inputProps={{
					name: 'Sort by',
					id: 'uncontrolled-native',
				}}
				onChange={(event) => 
					dispatch(filterOperations.setSort(event.target.value))}
			>
				{sortBy.map((item)=>
					<option key={item._id} value={item.value}>{item.name}</option>)}
			</NativeSelect>
		</Box>
	)
}

export default HeadSearch