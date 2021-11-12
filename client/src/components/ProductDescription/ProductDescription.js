import React, {useEffect, useState} from 'react'
import {Box, Typography, Button, Divider, Stack} from '@mui/material'

import SocialLinks from '../SocialLInks'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccordionProduct from './Accordion/Accordion'
import PropTypes from 'prop-types'
import Colors from './Colors'

import{useProductDescriptionStyle} from '../../utils/customHooks/useProductDescriptionStyle'

const colors = [
	{'_id': '618b8739af938f27ec67e6ee',
		'name': 'green',
		'cssValue': '#5A5D51'},
	{'_id': '618b8739af938fee',
		'name': 'red',
		'cssValue': '#FF0000'}
]

const user = false


const ProductDescription = (
	{title = 'Title' ,
		id = 123 ,
		quantity = 4,
		currentPrice =123}) => {


	const classes = useProductDescriptionStyle()

	// eslint-disable-next-line no-unused-vars
	const [activeColor, setActiveColor] = useState(null)
	// eslint-disable-next-line no-unused-vars
	const [activeSize, setActiveSize] = useState(null)
	const [available, setAvailable] = useState(null)
	useEffect(()=>{
		if(quantity === 0){
			setAvailable('pre-order')
		}else if(quantity < 5){
			setAvailable('low on stock!')
		} else {
			setAvailable('Available')
		}
	}, [quantity])

	// eslint-disable-next-line no-unused-vars
	const handleActiveColor = ()=>{
	//	Set active color
		//Send req

	}
	// eslint-disable-next-line no-unused-vars
	const handleActiveSize = () => {
		//SetActiveSize
		//Send req
	}

	return (
		<Box maxWidth={537}>
			<Box className={classes.header}>
				<Typography color={'primary'} fontSize={32} sx={{textTransform: 'uppercase', letterSpacing:'4px'}}>
					{title}</Typography>
				<SocialLinks/>
			</Box>
			<Typography classes={{overline : classes.productId}} fontSize={14}  variant="overline" display="block" gutterBottom>PRODUCT ID: {id}</Typography>
			<Box>
				<Typography fontSize={14} fontWeight={600}
					className={classes.optionText}>
					color
				</Typography>
				<Box sx={{my:'10px'}}>

					{colors.map(color => {
						return <Colors key={color._id} cssValue={color.cssValue} />
					})}

				</Box>
			</Box>
			<Box>
				<Typography fontSize={14} fontWeight={600}
					classes={{root : classes.optionText}}>
					size
				</Typography>
			
				<Stack direction={'row'} className={classes.stack} >
					<Typography fontSize={'14px'} component={'button'} disableRipple variant={'body1'} className={classes.sizeBtn}>
							SINGLE</Typography>
					<Button disableRipple classes={{root: classes.singleBtn}}>
							DOUBLE</Button>
					<Button disableRipple classes={{root: classes.singleBtn}}>
							QUEEN</Button>
					<Button disableRipple classes={{root: classes.singleBtn}}>
							KING</Button>
				</Stack>
				
			</Box>
			<Box className={classes.actions}>
				<Box>
					<Typography sx={{textTransform:'uppercase'}} fontSize={24} fontWeight={600}>USD ${currentPrice}.00</Typography>
					<Typography sx={{textTransform:'uppercase'}} fontSize={14} color={'rgba(92, 94, 96, 0.5)'}>{available}</Typography>
				</Box>
				<Box >
					<Button sx={{py: '22px', px:'33px', mr:'15px'}} variant={'contained'}>
						ADD TO BAG
					</Button>
					{/* eslint-disable-next-line no-console */}
					<Button onClick={() => console.log('check')} 
						disabled={!user} sx={{p:'24px'}} variant={'contained'}>
						<FavoriteBorderOutlinedIcon fontSize={'small'}/>
					</Button>
				</Box>
			</Box>
			<Divider sx={{background:'#373F41'}}  />
			<AccordionProduct />
		</Box>
	)
}
ProductDescription.propTypes ={
	title : PropTypes.string,
	id: PropTypes.number,
	quantity: PropTypes.number,
	currentPrice: PropTypes.number
}
export default ProductDescription