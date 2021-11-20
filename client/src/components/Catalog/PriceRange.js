import React from 'react'
import { FormControl, InputAdornment, OutlinedInput, Slider, Box } from '@mui/material'


const PriceRng = {
	height: '22px',
	width: '80px',
	margin: '0px 5px',
	borderRadius: '0px',

}


const style = {
	marginLeft: '-50px',
}

const PriceRangeBlock = {
	display: 'flex',
	alignItems: 'center',
}

const PriceRange = () => {
	// временно
	const [value, setValue] =  React.useState([3,35])

	// Changing State when volume increases/decreases
	const rangeSelector = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box style={style}>
			<Slider
				getAriaLabel={() => 'Minimum distance shift'}
				value={value}
				onChange={rangeSelector}
				valueLabelDisplay="auto"
				// getAriaValueText={valuetext}
				disableSwap
				sx={{
					height: '2px',
					width: 250,
					color: '#373F41',
					'& .MuiSlider-thumb': {
						borderRadius: '1px',
						width: '17px',
						height: '10px',
					},
				}}
			/>
			<Box style={PriceRangeBlock}>
				FROM
				<FormControl fullWidth sx={{ m: 1 }}>
					<OutlinedInput
						style={PriceRng}
						id="outlined-adornment-amount"
						value={value[0]}
						// placeholder={value[0]}
						// onChange={handleChange('amount')}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
					/>
				</FormControl>
				TO
				<FormControl fullWidth sx={{ m: 1 }}>
					<OutlinedInput
						style={PriceRng}
						id="outlined-adornment-amount"
						value={value[1]}
						// placeholder={value[1]}
						// onChange={handleChange('amount')}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
					/>
				</FormControl>
			</Box>
		</Box>
	)
}

export default PriceRange