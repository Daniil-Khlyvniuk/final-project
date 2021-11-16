import React from 'react'
import Typography from '@mui/material/Typography'
import { Slider } from '@mui/material'

const PriceRng = {
	width: '50px',
	margin: '0px 10px',
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
		<div style={{
			margin: 'auto',
			display: 'block',
			width: 'fit-content'
		}}>
			<Typography id="range-slider" gutterBottom>
        - PRICE
			</Typography>
			<Slider
				value={value}
				onChange={rangeSelector}
				valueLabelDisplay="auto"
			/>
			FROM
			<input
				style={PriceRng}
				placeholder={`$ ${value[0]+'0'}`}
				prefix= "$"
			/>
      TO
			<input
				style={PriceRng}
				placeholder={`$ ${value[1]+'0'}`}
			/>
      
		</div>
	)
}

export default PriceRange