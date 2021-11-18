import React, { useEffect, useState } from 'react'
import {Box, NativeSelect } from '@mui/material'
import filterApi from '../../utils/API/filterApi'


const HeadSearch = () => {
	const [perPage, setPerPage] = useState([])
	const [sortBy, setSortBy] = useState([])

	const getPerPageFilters = async () => {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPage(pageRes.data)
	}
	const getSortByFilters = async () => {
		const sortRes = await filterApi.getFiltersByType('sortBy')
		setSortBy(sortRes.data)
	}

	useEffect(()=> {
		getPerPageFilters()
		getSortByFilters()
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
					borderBottom={'none'}
					margin={'50px'}
					defaultValue={1}
					variant={'outlined'}
					inputProps={{
						name: 'count',
						id: 'uncontrolled-native',
					}}
				>
					{perPage.map((item)=>
						<option key={item._id} value={item.value}>{item.name}</option>)}
				</NativeSelect>
			)}
			<NativeSelect
				margin={'50px'}
				defaultValue={18}
				inputProps={{
					name: 'Sort by',
					id: 'uncontrolled-native',
				}}
			>
				{sortBy.map((item)=>
					<option key={item._id} value={item.value}>{item.name}</option>)}
			</NativeSelect>
		</Box>
	)
}

export default HeadSearch