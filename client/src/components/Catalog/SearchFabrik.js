import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import {FabrikBox} from './style'

const SearchSize = () => {
	return (
		<div style={FabrikBox}>
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="gender"
					defaultValue="SINGLE"
					name="radio-buttons-group"
				>
					<FormControlLabel value="COTTON" control={<Radio />} label="COTTON" />
					<FormControlLabel value="CASHEMIRE" control={<Radio />} label="CASHEMIRE" />
					<FormControlLabel value="SATIN" control={<Radio />} label="SATIN" />
					<FormControlLabel value="SILK" control={<Radio />} label="SILK" />
					<FormControlLabel value="VISCOSE" control={<Radio />} label="VISCOSE" />
					<FormControlLabel value="LINEN" control={<Radio />} label="LINEN" />
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export default SearchSize