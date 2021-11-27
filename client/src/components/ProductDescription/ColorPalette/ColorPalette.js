import React, {useEffect, useState} from 'react'
import {Box, ToggleButton, ToggleButtonGroup} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import productActions, {ProductSelector} from '../../../store/Product'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router'

const ColorPalette = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const [activeColor , setActiveColor] = useState(null)


	const activeProduct = useSelector(ProductSelector.getProduct())
	const allColors = useSelector(ProductSelector.allColors())
	const variants = useSelector(ProductSelector.allVariants())

	useEffect(() => {
		setActiveColor(activeProduct.color)
	}, [activeProduct])

	const handleActiveColor = (event,newActiveColor) => {
		if(newActiveColor !== null){
			setActiveColor(newActiveColor)
			if(newActiveColor !== activeColor){
				dispatch(productActions.clearSizes())

				const newProduct = variants.find(item => {
					return item.color._id === newActiveColor
				})
				history.push(`/product-details/${newProduct._id}`)
			}
		}
	}
	return (
		<Box sx={{my:'10px'}}>
			<ToggleButtonGroup
				exclusive
				value={activeColor}
				onChange={handleActiveColor}>
				{  allColors && allColors.map(color => (
					<ToggleButton
						key={color._id}
						aria-label={color.name}
						value={color._id}
						color={'neutral'}
						sx={{border: 'none', padding: '0', mr:'10px'}}>
						<CircleIcon
							strokeWidth={1}
							stroke={activeColor === color._id ? 'black' : 'white'}
							sx={{width: '20px',color: color.cssValue }}/>
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</Box>
	)
}

export default ColorPalette
