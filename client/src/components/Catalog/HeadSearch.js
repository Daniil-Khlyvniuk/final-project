import React, { useEffect, useState } from 'react'
import {Box, NativeSelect } from '@mui/material'
import filterApi from '../../utils/API/filterApi'
import { styled, ThemeProvider } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import theme from '../../utils/Theme'



const BootstrapInput = styled(InputBase)(({ theme }) => ({
	'label + &': {
		marginTop: theme.spacing(3),
	},
	'& .MuiInputBase-input': {
		position: 'relative',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		backgroundColor: '#ffffff',
	},
}))


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
					sx={{
						borderBottom: 'none',
						color: '#373F41'
					}}
					margin={'50px'}
					defaultValue={1}
					input={<BootstrapInput />}
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
			<ThemeProvider theme={theme}>
				<NativeSelect
					margin={'50px'}
					defaultValue={18}
					input={<BootstrapInput />}
					inputProps={{
						name: 'Sort by',
						id: 'uncontrolled-native',
					}}
				>
					{sortBy.map((item)=>
				
						<option
							key={item._id}
							value={item.value}>{item.name}</option>)}
				</NativeSelect>
			</ThemeProvider>
		</Box>
	)
}

export default HeadSearch