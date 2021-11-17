import React, { useEffect, useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, RadioGroup } from '@mui/material'
import sizeAPI from '../../utils/API/sizeAPI'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'



const style = {
	display: 'block',
	width: 'fit-content'
}

const SearchSize = () => {
	const [size, setSize] = useState()

	useEffect(async ()=>{
		const res =  await sizeAPI.getSizes()
		setSize(res.data)
	})
	return (
		<div style={style}>
			
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
		</div>
	)
}

export default SearchSize