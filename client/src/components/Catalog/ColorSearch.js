import React, { useEffect, useState } from 'react'
import { ToggleButtonGroup,ToggleButton 	} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import colorAPI from '../../utils/API/colorAPI'
// import ColorSearchItem from './ColorSearchItem'
import {useSelector,useDispatch} from 'react-redux'
import {filterSelectors,filterOperations} from '../../store/Filter'

import Icon from '../UI/Icon'

const ColorSearch = () => {
	const dispatch = useDispatch()
	const [colors, setColors] =	useState([])
	const selectedColors = useSelector(filterSelectors.getColors())
	

	const getColorFilters = async () => {
		const res = await colorAPI.getColors()
		setColors(res.data)
	}

	useEffect( ()=>{
		getColorFilters()
	},[])

	const handleChange = (event, newColor) =>
	{
		// eslint-disable-next-line no-console
		// console.log('colors',selectedColors)

		dispatch(filterOperations.handleColor(newColor))

	}

	
	return (
		<ToggleButtonGroup
			value={selectedColors}
			onChange={handleChange}
			aria-label="colors selected"
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			{colors.length && colors.map(
				(color)=> {
					const {name, cssValue} = color
					const isSelected = selectedColors.includes(name)
					return (
						<ToggleButton
							key={color._id}
							aria-label={name} 
							color={'neutral'} 
							sx={{border: 'none', padding: '0', mr:'10px'}}
							value={name}
						>
							{name !== 'multicolored'
								? (<CircleIcon 
									strokeWidth={1} 
									stroke={isSelected? 'black' : 'transparent'}
									fontSize={'medium'}
									sx={{color: cssValue, opacity: () => isSelected ? '1' : '0.7'}}
								/>)
								: (
									<Icon type="multiColor" fontSize="medium" strokeWidth={1}
										stroke={isSelected? 'black' : 'transparent'}
										sx={{color: cssValue, opacity: () => isSelected ? '1' : '0.7'}}
										value={name}
									/>
								)
							}
						</ToggleButton>
					)
				}
			)}
		</ToggleButtonGroup>
	)
}

export default ColorSearch