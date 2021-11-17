import React, { useEffect, useState } from 'react'
import { NativeSelect } from '@mui/material'
import filterApi from '../../utils/API/filterApi'


const headSearch = {
	display: 'flex',
	justifyContent: 'space-between',
	margin: '50px auto',
	maxWidth: '880px',
	marginTop: '-40px',
	marginBottom: '-40px',
}

const HeadSearch = () => {

	const [perPage, setPerPage] = useState([])
	const [sortBy, setSortBy] = useState([])

	useEffect(async ()=> {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPage(pageRes.data)
	},[])

	useEffect(async ()=> {
		const sortRes = await filterApi.getFiltersByType('sortBy')
		setSortBy(sortRes.data)
	},[])

	return (
		<div style={headSearch}>
			{perPage.length && (
				<NativeSelect
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
		</div>
	)
}

export default HeadSearch