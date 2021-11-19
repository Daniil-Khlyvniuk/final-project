import React, { useEffect, useState } from 'react'
import {Box, FormControl, RadioGroup } from '@mui/material'
import sizeAPI from '../../utils/API/sizeAPI'

import SearchSizeItem from './SearchSizeItem'

const SearchSize = () => {
	const [sizes, setSize] = useState()
	const getSizeFilters = async () => {
		const res = await sizeAPI.getSizes()
		setSize(res.data)
	}
	useEffect(()=>{
		getSizeFilters()
	},[])
	return (
		<Box>
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="gender"
					defaultValue="SINGLE"
					name="radio-buttons-group"
				>
					{sizes && (sizes.map((size) => (
						<SearchSizeItem key={size._id} size={size} />
					)))}
				</RadioGroup>
			</FormControl>
		</Box>
	)
}

export default SearchSize