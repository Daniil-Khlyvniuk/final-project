import React, { useEffect, useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, RadioGroup } from '@mui/material'
import sizeAPI from '../../utils/API/sizeAPI'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'


const SearchSize = () => {
	const [size, setSize] = useState()
	const getSizeFilters = async () => {
		const res =  await sizeAPI.getSizes()
		setSize(res.data)
	}
	useEffect(()=>{
		getSizeFilters()
	})
	return (
		<Box>
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="gender"
					defaultValue="SINGLE"
					name="radio-buttons-group"
				>
					{size && (size.map((sizes)=>{
						return (
							<FormControlLabel
								key={sizes.id}
								value={sizes.name}
								control={		
									<Checkbox
										// checked={true}
										value={sizes.name}
										// onChange={() => dispatch(filterOperations.handleColor(sizes.name))}
										icon={<RadioButtonUncheckedIcon sx={{}}  />}
										checkedIcon={<RadioButtonCheckedIcon sx={{}} />}
									/>
								}
								label={sizes.name} />

						)
					}))}
				</RadioGroup>
			</FormControl>
		</Box>
	)
}

export default SearchSize