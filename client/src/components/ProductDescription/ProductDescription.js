import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import productActions, {ProductSelector} from '../../store/Product'
import SocialLinks from '../SocialLInks'
import AccordionProduct from './Accordion/Accordion'


// eslint-disable-next-line no-unused-vars
import {Box, Typography, Button, Divider, Tabs, Tab, ToggleButtonGroup, ToggleButton} from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import{useProductDescriptionStyle} from '../../utils/customHooks/useProductDescriptionStyle'


// eslint-disable-next-line no-unused-vars
const user = false


const ProductDescription = () => {
	const activeProduct = useSelector(ProductSelector.getProduct())
	// eslint-disable-next-line max-len
	const [activeColor, setActiveColor] = useState( null)
	// eslint-disable-next-line max-len
	const [activeSize, setActiveSize] = useState(null)
	const [available, setAvailable] = useState('')

	const allColors = useSelector(ProductSelector.allColors())
	const variants = useSelector(ProductSelector.allVariants())
	const allSizes = useSelector(ProductSelector.allSizes())

	const parent = useSelector(ProductSelector.getParent())
	// eslint-disable-next-line no-unused-vars
	const isLoading = useSelector(ProductSelector.isLoading())


	const history = useHistory()
	const dispatch = useDispatch()

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


	useEffect(() => {
		if(activeProduct){
			setActiveColor(activeProduct.color._id)
			setActiveSize(activeProduct.size._id)
		}
	}, [activeProduct])


	const handleActiveColor =  (event , newActiveColor) => {
		if(newActiveColor !== null){
			setActiveColor(newActiveColor)
			if(newActiveColor !== activeColor){
				dispatch(productActions.clearSizes())
				// eslint-disable-next-line max-len
				const newProduct = variants.find(item => item.color._id === newActiveColor)
				history.push(`/product-details/${newProduct._id}`)
			}
		}
	}

	const handleActiveSize = (event , newActiveSize) => {
		setActiveSize(newActiveSize)
		// eslint-disable-next-line max-len
		const newProduct = variants.find(i =>i.size._id === newActiveSize && i.color._id === activeColor)

		history.push(`/product-details/${newProduct._id}`)
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
						{  allColors && allColors.map(color => (
							<ToggleButton  key={color._id}  aria-label={color.name} value={color._id} color={'neutral'} sx={{border: 'none', padding: '0', mr:'10px'}}>
								<CircleIcon strokeWidth={1} stroke={activeColor === color._id ? 'black' : 'white'}
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
					extcolor='primary'
					indicatorColor="primary"
					aria-label="sizes"
					TabIndicatorProps={{
						sx: {
							height: '1px',
							bottom:'7px'
						}
					}}
				>
					{allSizes && allSizes.map(item => <Tab key={item.size._id} disableRipple value={item.size._id} label={item.size.name} sx={{fontSize: '14px', minWidth:'0', padding:'0' , mr:'40px'}}/>)}
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