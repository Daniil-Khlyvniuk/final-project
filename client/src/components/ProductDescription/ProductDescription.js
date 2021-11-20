import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {ProductSelector} from '../../store/Product'
import SocialLinks from '../SocialLInks'
import AccordionProduct from './Accordion/Accordion'
import ColorPalette from './ColorPalette/ColorPalette'
import Sizes from './Sizes/Sizes'
import ActionButtons from './ActionButtons/ActionButtons'
import {Box, Typography, Divider} from '@mui/material'

import{useProductDescriptionStyle} from '../../utils/customHooks/useProductDescriptionStyle'

const ProductDescription = () => {
	const [available, setAvailable] = useState('')

	const activeProduct = useSelector(ProductSelector.getProduct())
	const parent = useSelector(ProductSelector.getParent())

	const classes = useProductDescriptionStyle()


	useEffect(()=>{
		if(activeProduct.quantity === 0){
			setAvailable('pre-order')
		}else if(activeProduct.quantity < 5){
			setAvailable(`low on stock! 
			 ${activeProduct.quantity} left`)
		} else {
			setAvailable('Available')
		}
	}, [activeProduct.quantity])


	return (
		<Box>
			<Box className={classes.header}>
				<Typography
					color={'primary'}
					fontSize={32}
					sx={{textTransform: 'uppercase', letterSpacing:'4px'}}>
					{parent.name}
				</Typography>
				<SocialLinks/>
			</Box>
			<Typography
				classes={{overline : classes.productId}}
				fontSize={14}
				variant="overline"
				display="block"
				gutterBottom>
				PRODUCT ID: {activeProduct?.itemNo}</Typography>
			<Box>
				<Typography
					variant="h3"
					fontWeight={600}
					className={classes.optionText}>
					color
				</Typography>
				<ColorPalette />
			</Box>

			<Box>
				<Typography
					variant="h3"
					fontWeight={600}
					classes={{root : classes.optionText}}>
					size
				</Typography>
				<Sizes/>
			</Box>
			<Box className={classes.actions}>
				<Box className={classes.price}>
					<Typography
						sx={{textTransform:'uppercase'}}
						fontSize={24}
						fontWeight={600}>
						USD ${activeProduct.currentPrice}.00
					</Typography>
					<Typography
						sx={{textTransform:'uppercase'}}
						fontSize={14}
						color={'rgba(92, 94, 96, 0.5)'}>
						{available}
					</Typography>
				</Box>
				<Box className={classes.productActions} >
					<ActionButtons />
				</Box>
			</Box>
			<Divider sx={{background:'#373F41'}}  />
			<AccordionProduct description={parent.description} />
		</Box>
	)
}

export default ProductDescription