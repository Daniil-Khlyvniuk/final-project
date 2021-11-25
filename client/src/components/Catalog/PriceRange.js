import React, { useEffect } from 'react'
import { FormControl, InputAdornment, OutlinedInput, Slider, Box } from '@mui/material'
import productsAPI from '../../utils/API/productsAPI'
import {PriceRng, PriceBox, PriceRangeBlock, money} from './style'

const minDistance = 100

const PriceRange = () => {
	// временно
	const [value, setValue] = React.useState([3, 35])

	const rangeSelector = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return
		}
		if (activeThumb === 0) {
			setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
		} else {
			setValue([value[0], Math.max(newValue[1], value[0] + minDistance)])
		}
	}

	const getPriceFilters = async () => {
		try{
			const res = await productsAPI.getMinMaxPrice()
			// eslint-disable-next-line no-console
			setValue([res.data[0].min, res.data[0].max])
			console.log('mmm',res.data)
		}
		catch(err){
			console.log('priceRange err', err)
		}
	}
	useEffect(()=>{
		getPriceFilters()
	},[])

	return (
		<Box style={PriceBox}>
			<Slider
				getAriaLabel={() => 'Minimum distance shift'}
				value={value}
				min={0}
				max={1000}
				onChange={rangeSelector}
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
						placeholder={value[0]}
						startAdornment={<InputAdornment position="start"><p style={money}>$</p></InputAdornment>}
					/>
				</FormControl>
        TO
				<FormControl fullWidth sx={{ m: 1 }}>
					<OutlinedInput
						min={0}
						max={500}
						style={PriceRng}
						id="outlined-adornment-amount"
						value={value[1]}
						startAdornment={<InputAdornment position="start"><p style={money}>$</p></InputAdornment>}
					/>
				</FormControl>
			</Box>
		</Box>
	)
}

export default PriceRange