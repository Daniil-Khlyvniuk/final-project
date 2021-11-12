import React, {useEffect, useState} from 'react'
import {Box, Typography, Button, Divider, Tabs, Tab, ToggleButtonGroup, ToggleButton} from '@mui/material'

import SocialLinks from '../SocialLInks'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccordionProduct from './Accordion/Accordion'
import PropTypes from 'prop-types'


import{useProductDescriptionStyle} from '../../utils/customHooks/useProductDescriptionStyle'
import axios from 'axios'
import CircleIcon from '@mui/icons-material/Circle'


// const colors = [
// 	{'_id': '618b8739af938f27ec67e6ee',
// 		'name': 'green',
// 		'cssValue': '#5A5D51'},
// 	{'_id': '618b8739af938fee',
// 		'name': 'red',
// 		'cssValue': '#FF0000'}
// ]

const user = false


const ProductDescription = (
	{data}) => {

	const {name = 'Title' ,
		_id,
		quantity = 4,
		currentPrice =123 , variants} = data



	const classes = useProductDescriptionStyle()
	const [allVariants , setAllVariants] = useState(null)
	// eslint-disable-next-line no-unused-vars
	const [activeColor, setActiveColor] = useState(null)
	// eslint-disable-next-line no-unused-vars
	const [activeSize, setActiveSize] = useState(null)
	const [available, setAvailable] = useState(null)

	useEffect(()=>{
		if(!variants){
			return
		} else {
			const all = variants.map(i => axios.get(`/api/products/${data._id}/${i}`))
			Promise.all(all).then(res => {
				setAllVariants(res.data)
			})
		}

	}, [allVariants])
	// eslint-disable-next-line no-console
	console.log(allVariants)

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
	const handleActiveColor = (event , newActiveColor)=>{
		setActiveColor(newActiveColor)
		// eslint-disable-next-line no-console
		console.log(activeColor)
		//Send req

	}
	// eslint-disable-next-line no-unused-vars
	const handleActiveSize = (event , newActiveSize) => {
		setActiveSize(newActiveSize)
		//Send req
	}

	return (
		<Box maxWidth={537}>
			<Box className={classes.header}>
				<Typography color={'primary'} fontSize={32} sx={{textTransform: 'uppercase', letterSpacing:'4px'}}>
					{name}</Typography>
				<SocialLinks/>
			</Box>
			<Typography classes={{overline : classes.productId}} fontSize={14}  variant="overline" display="block" gutterBottom>PRODUCT ID: {_id}</Typography>
			<Box>
				<Typography fontSize={14} fontWeight={600}
					className={classes.optionText}>
					color
				</Typography>

				{/*Color's*/}
				<Box sx={{my:'10px'}}>

					{/* eslint-disable-next-line no-console,max-len */}
					<ToggleButtonGroup exclusive value={activeColor} onChange={handleActiveColor}>
						{/* eslint-disable-next-line no-mixed-spaces-and-tabs */}
						 <ToggleButton  aria-label='color1' value='12345' color={'neutral'} sx={{border: 'none', padding: '0'}}>
							<CircleIcon stroke={activeColor === '12345' && 'black'}
								sx={{width: '20px',color: 'red' }}/>
						</ToggleButton>

					</ToggleButtonGroup>


				</Box>
			</Box>

			{/*Sizes*/}
			<Box>
				<Typography fontSize={14} fontWeight={600}
					classes={{root : classes.optionText}}>
					size
				</Typography>
			
				{/*<Stack direction={'row'} className={classes.stack} >*/}
				{/*	<Typography fontSize={'14px'} component={'button'} disableRipple variant={'body1'} className={classes.sizeBtn}>*/}
				{/*			SINGLE</Typography>*/}
				{/*	<Button disableRipple classes={{root: classes.singleBtn}}>*/}
				{/*			DOUBLE</Button>*/}
				{/*	<Button disableRipple classes={{root: classes.singleBtn}}>*/}
				{/*			QUEEN</Button>*/}
				{/*	<Button disableRipple classes={{root: classes.singleBtn}}>*/}
				{/*			KING</Button>*/}
				{/*</Stack>*/}

				<Tabs value={activeSize || null} 
					onChange={handleActiveSize}
					extColor='primary'
					indicatorColor="primary"
					aria-label="sizes"
					TabIndicatorProps={{
						sx: {
							height: '1px',
							bottom:'7px'
						}
					}}
				>
					<Tab disableRipple value="id1" label="Size name" sx={{fontSize: '14px', minWidth:'0', padding:'0' , mr:'40px'}}/>
					<Tab disableRipple value="id4444" label="Size name2" sx={{fontSize: '14px', minWidth:'0', padding:'0'}}/>
				</Tabs>
				
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
	data: PropTypes.shape({
		name : PropTypes.string,
		_id: PropTypes.string,
		quantity: PropTypes.number,
		currentPrice: PropTypes.number,
		variants : PropTypes.array,
	})

}
export default ProductDescription