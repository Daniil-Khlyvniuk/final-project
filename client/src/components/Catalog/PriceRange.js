import React, {useState, useEffect} from 'react'
import { FormControl, InputAdornment, OutlinedInput, Slider, Box } from '@mui/material'
import productsAPI from '../../utils/API/productsAPI'
import {PriceRng, PriceBox, PriceRangeBlock, money} from './style'
import {useSelector} from 'react-redux'
import {filterSelectors} from '../../store/Filter'

import useFilterHandler from '../../utils/customHooks/useFilterHandler'

const minDistance = 100

const PriceRange = () => {
	const {handleFilterChange} = useFilterHandler()
	const {minPrice, maxPrice} = useSelector(filterSelectors.getFilters())
	const [defaultMaxPrice, setDefaultMaxPrice] = useState(0)
	const [value, setValue] = useState([0,1000])

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

	const handleRange = (event, newValue) => {
		handleFilterChange('priceRange',newValue)
	}

	const getPriceFilters = async () => {
		try{
			const res = await productsAPI.getMinMaxPrice()
			setDefaultMaxPrice(res.data[0].max)
		}
		catch(err){
			// eslint-disable-next-line no-console
			console.log('priceRange err', err)
		}
	}

	useEffect(() => {
		setValue([minPrice,maxPrice])
	},[minPrice,maxPrice])

	useEffect(()=>{
		getPriceFilters()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<Box style={PriceBox}>
			<Slider
				value={value}
				min={0}
				max={defaultMaxPrice}
				onChange={rangeSelector}
				onChangeCommitted={handleRange}
				disableSwap
				sx={{
					height: '2px',
					color: 'primary.main',
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
						id="min-amount"
						value={minPrice}
						startAdornment={<InputAdornment position="start"><p style={money}>$</p></InputAdornment>}
					/>
				</FormControl>
				TO
				<FormControl fullWidth sx={{ m: 1 }}>
					<OutlinedInput
						style={PriceRng}
						id="max-amount"
						value={maxPrice}
						startAdornment={<InputAdornment position="start"><p style={money}>$</p></InputAdornment>}
					/>
				</FormControl>
			</Box>
		</Box>
	)
}

export default PriceRange
