import React from 'react'
import { FormControl, InputAdornment, OutlinedInput, Slider, Box } from '@mui/material'

const PriceRng = {
	height: '22px',
	width: '80px',
	margin: '0px 10px',
	borderRadius: '0px',

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
	
	// const priceSelector = (price) => {
	// 	// eslint-disable-next-line no-mixed-spaces-and-tabs
	// 	const minPrice =
	//   setValue(price)
	// }
	//
	

	return (
		<Box>
			<Slider
				value={value}
				onChange={rangeSelector}
				valueLabelDisplay="auto"
			/>
			<Box style={PriceRangeBlock}>
				FROM
				{/*<input*/}
				{/*	style={PriceRng}*/}
				{/*	placeholder={`$ ${value[0]+'0'}`}*/}
				{/*	prefix= "$"*/}
				{/*/>*/}
				<FormControl fullWidth sx={{ m: 1 }}>
					<OutlinedInput
						style={PriceRng}
						id="outlined-adornment-amount"
						value={value[0]}
						placeholder={value[0]}
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
						placeholder={value[1]}
						// onChange={handleChange('amount')}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
					/>
				</FormControl>
			</Box>
			{/* eslint-disable-next-line no-mixed-spaces-and-tabs */}
		 	{/*<input*/}
			{/*	style={PriceRng}*/}
			{/*	placeholder={`$ ${value[1]+'0'}`}*/}
			{/*/>*/}
      
		</Box>
	)
}

export default PriceRange