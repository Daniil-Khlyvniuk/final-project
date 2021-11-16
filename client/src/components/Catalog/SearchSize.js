import React from 'react'
import Typography from '@mui/material/Typography'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'


const style = {
	margin: '50px',
	display: 'block',
	width: 'fit-content'
}

const SearchSize = () => {
	return (
		<div style={style}>
			<Typography id="range-slider" gutterBottom>
        - SIZE
			</Typography>
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="gender"
					defaultValue="SINGLE"
					name="radio-buttons-group"
				>
					<FormControlLabel value="SINGLE" control={<Radio />} label="SINGLE" />
					<FormControlLabel value="DOUBLE" control={<Radio />} label="DOUBLE" />
					<FormControlLabel value="QUEEN" control={<Radio />} label="QUEEN" />
					<FormControlLabel value="KING" control={<Radio />} label="KING" />
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export default SearchSize