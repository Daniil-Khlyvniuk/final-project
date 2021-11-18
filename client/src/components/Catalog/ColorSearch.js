import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import colorAPI from '../../utils/API/colorAPI'
import ColorSearchItem from './ColorSearchItem'
const ColorSearch = () => {
	const [colors, setColors] =	useState([])
	const getColorFilters = async () => {
		const res = await colorAPI.getColors()
		setColors(res.data)
	}
	useEffect(()=>{
		getColorFilters()
	},[])

	return (
		<Box sx={{my:'10px'}}>
			{colors.length && (colors.map((color)=> {
				return(
					<ColorSearchItem key={color._id} color={color} />
					// <ToggleButtonGroup 
					// 	exclusive
					// 	key={color._id}
					// >
					// 	<ToggleButton 
					// 		key={color._id}
					// 		aria-label={color.name}
					// 		value={color._id}
					// 		color={'neutral'}
					// 		sx={{border: 'none', padding: '0', mr:'10px'}}
					// 	>
					// 		<CircleIcon 
					// 			stroke-width={1}
					// 			stroke={'black'}
					// 			sx={{width: '20px', color: color.cssValue }}
					// 		/>
					// 	</ToggleButton>
					// </ToggleButtonGroup>
				)
			})) }
		</Box>
	)
}

export default ColorSearch