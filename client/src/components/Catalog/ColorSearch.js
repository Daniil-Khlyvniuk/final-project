import React, { useState } from 'react'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import { useDispatch, useSelector } from 'react-redux'
import activeProductActions, { activeProductOperations, activeProductSelector } from '../../store/ActiveProduct'



const ColorSearch = () => {
	const dispatch = useDispatch()
	const activeProduct = useSelector(activeProductSelector.getActiveVariant())
	const allColors = useSelector({
		_id: '618b85bbaf938f27ec67e6e2',
		name: 'red',
		cssValue: '#C96456',
		date: '2021-11-10T08:41:31.539Z',
		__v: 0
	},
	{
		_id: '618b85bbaf938f27ec67e6e3',
		name: 'purple',
		cssValue: '#b800ff',
		date: '2021-11-10T08:41:31.539Z',
		__v: 0
	},
	{
		_id: '618b85bbaf938f27ec67e6e4',
		name: 'black',
		cssValue: '#050505',
		date: '2021-11-10T08:41:31.539Z',
		__v: 0
	},
	{
		_id: '618b85bbaf938f27ec67e6e5',
		name: 'blu',
		cssValue: '#1a00ff',
		date: '2021-11-10T08:41:31.539Z',
		__v: 0
	})
	// activeProductSelector.getColors()
	const [activeColor, setActiveColor] = useState(activeProduct.color._id)

	const handleActiveColor = (event , newActiveColor)=>{
		setActiveColor(newActiveColor)
		dispatch(activeProductActions.setActiveColor(newActiveColor))
		if(newActiveColor){
			dispatch(activeProductOperations.fetchNewActiveProduct({
				specification : 'color',
				specificationId: newActiveColor,
				productId : parent._id

			}))
		}
	}
  
	return (
		<div>
			<Box sx={{my:'10px'}}>
				{/* eslint-disable-next-line max-len */}
				<ToggleButtonGroup exclusive value={activeColor} onChange={handleActiveColor}>
					{allColors.map(color => (
						<ToggleButton key={color._id}  aria-label={color.name} value={color._id} color={'neutral'} sx={{border: 'none', padding: '0', mr:'10px'}}>
							<CircleIcon stroke-width={1} stroke={activeColor === color._id ? 'black' : 'white'}
								sx={{width: '20px',color: color.cssValue }}/>
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Box>
		</div>
	)
}

export default ColorSearch