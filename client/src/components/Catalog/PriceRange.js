/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import { FormControl, InputAdornment, OutlinedInput, Slider, Box } from '@mui/material'
import productsAPI from '../../utils/API/productsAPI'
import {PriceRng, PriceBox, PriceRangeBlock, money} from './style'
import {useSelector, useDispatch} from 'react-redux'
import {filterSelectors, filterOperations} from '../../store/Filter'

import useFilterHandler from '../../utils/customHooks/useFilterHandler'

const minDistance = 100

const PriceRange = () => {
	const {handleFilterChange} = useFilterHandler()
	// временно
	// const dispatch = useDispatch()
	const {minPrice, maxPrice} = useSelector(filterSelectors.getFilters())

	const [value, setValue] = useState([0,1000])

	const [defaultMaxPrice, setDefaultMaxPrice] = useState(0)

	const rangeSelector = (event, newValue, activeThumb) => {
		// // eslint-disable-next-line no-console
		// console.log('range',event, newValue)
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
		// eslint-disable-next-line no-console
		// console.log('range',event, newValue)
		// setValue(newValue)
		handleFilterChange('priceRange',newValue)
	}

	const getPriceFilters = async () => {
		try{
			const res = await productsAPI.getMinMaxPrice()
			// setValue([res.data[0].min, res.data[0].max])
			// setValue([0, res.data[0].max])
			setDefaultMaxPrice(res.data[0].max)
			// eslint-disable-next-line no-console
			// console.log('mmm',res.data)
			// dispatch(filterOperations.handleMinPrice(0))
			// dispatch(filterOperations.handleMaxPrice(res.data[0].max))
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
				// getAriaLabel={() => 'Minimum distance shift'}
				value={value}
				min={0}
				max={defaultMaxPrice}
				onChange={rangeSelector}
				onChangeCommitted={handleRange}
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