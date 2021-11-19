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
			{colors.length && 
			colors.map((color)=> <ColorSearchItem key={color._id} color={color} />) }
		</Box>
	)
}

export default ColorSearch