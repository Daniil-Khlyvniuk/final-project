import React, {useState, useEffect} from 'react'
import {Box, Typography, Button, Divider, Tabs, Tab, ToggleButtonGroup, ToggleButton} from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import SocialLinks from '../SocialLInks'
import AccordionProduct from './Accordion/Accordion'
import{useProductDescriptionStyle} from '../../utils/customHooks/useProductDescriptionStyle'


import {useDispatch, useSelector} from 'react-redux'
import activeProductActions, {activeProductOperations, activeProductSelector} from '../../store/ActiveProduct'


const user = false


const ProductDescription = () => {

	const activeProduct = useSelector(activeProductSelector.getActiveVariant())
	const allColors = useSelector(activeProductSelector.getColors())
	const allSizes = useSelector(activeProductSelector.getSizes())
	const parent = useSelector(activeProductSelector.getParent())
	const v = useSelector(activeProductSelector.getV())
	// const variants = useSelector(activeProductSelector.getVariants())
	const classes = useProductDescriptionStyle()
	const dispatch = useDispatch()

	const [activeColor, setActiveColor] = useState(activeProduct.color._id)
	const [activeSize, setActiveSize] = useState(activeProduct.size._id)
	const [available, setAvailable] = useState('')



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

	useEffect(() => {
		if(activeColor !== activeProduct.color._id ){
			const currentVariant = allSizes.find(i => i)
			console.log(currentVariant)
			dispatch(activeProductActions.setActiveVariant(currentVariant))
		}
	}, [activeColor])


	const handleActiveColor = (event , newActiveColor)=>{
		if(newActiveColor !== null){
			setActiveColor(newActiveColor)
			if(newActiveColor !== activeColor){
				setActiveSize(null)
				dispatch(activeProductActions.setActiveColor(newActiveColor))
				const d = v.find(item => item.color._id === newActiveColor)
				dispatch(activeProductOperations.fetchActiveProduct(d._id))
				// dispatch(activeProductOperations.fetchallSizesNew({
				// 	colorId : newActiveColor,
				// 	productId: parent._id
				// }))
			}
		}
	}

	const handleActiveSize = (event , newActiveSize) => {
		setActiveSize(newActiveSize)
		const check = allSizes.find(i =>i.size._id === newActiveSize)
		dispatch(activeProductOperations.fetchActiveProduct(check._id))
	}

	return (
		<Box mxnWidth={650}>
			<Box className={classes.header}>
				<Typography color={'primary'} fontSize={32} sx={{textTransform: 'uppercase', letterSpacing:'4px'}}>
					{parent.name}</Typography>
				<SocialLinks/>
			</Box>
			<Typography
				classes={{overline : classes.productId}}
				fontSize={14}
				variant="overline"
				display="block"
				gutterBottom> PRODUCT ID: {activeProduct?.itemNo}</Typography>
			<Box>
				<Typography variant="h3"  fontWeight={600}
					className={classes.optionText}>
					color
				</Typography>
				<Box sx={{my:'10px'}}>
					{/* eslint-disable-next-line max-len */}
					<ToggleButtonGroup exclusive value={activeColor} onChange={handleActiveColor}>
						{ activeProduct && allColors && allColors.map(color => (
							<ToggleButton key={color._id}  aria-label={color.name} value={color._id} color={'neutral'} sx={{border: 'none', padding: '0', mr:'10px'}}>
								<CircleIcon stroke-width={1} stroke={activeColor === color._id ? 'black' : 'white'}
									sx={{width: '20px',color: color.cssValue }}/>
							</ToggleButton>
						))}
					</ToggleButtonGroup>
				</Box>
			</Box>

			<Box>
				<Typography variant="h3"  fontWeight={600}
					classes={{root : classes.optionText}}>
					size
				</Typography>
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
					{!allSizes.length && <Tab key={allSizes._id} disableRipple value={allSizes._id} label={allSizes.name} sx={{fontSize: '14px', minWidth:'0', padding:'0' , mr:'40px'}}/>}
					{allSizes.length && allSizes.map(item => <Tab key={item.size._id} disableRipple value={item.size._id} label={item.size.name} sx={{fontSize: '14px', minWidth:'0', padding:'0' , mr:'40px'}}/>)}

				</Tabs>
				
			</Box>
			<Box className={classes.actions}>
				<Box className={classes.price}>
					<Typography sx={{textTransform:'uppercase'}} fontSize={24} fontWeight={600}>USD ${activeProduct.currentPrice}.00</Typography>
					<Typography sx={{textTransform:'uppercase'}} fontSize={14} color={'rgba(92, 94, 96, 0.5)'}>{available}</Typography>
				</Box>
				<Box className={classes.productActions} >
					<Button disableRipple disabled={!activeColor || !activeSize} sx={{py: '22px', px:'33px', mr:'13px'}} variant={'contained'}>
						ADD TO BAG
					</Button>
					<Button disableRipple
						disabled={!user} sx={{p:'24px'}} variant={'contained'}>
						<FavoriteBorderOutlinedIcon fontSize={'small'}/>
					</Button>
				</Box>
			</Box>
			<Divider sx={{background:'#373F41'}}  />
			<AccordionProduct description={parent.description} />
		</Box>
	)
}

export default ProductDescription