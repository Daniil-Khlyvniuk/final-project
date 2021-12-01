import React, {useEffect, useState} from 'react'
import {Tab, Tabs} from '@mui/material'
import {useSelector} from 'react-redux'
import {ProductSelector} from '../../../store/Product'
import {useHistory} from 'react-router'
import Loader from '../../UI/Loader/Loader'


const Sizes = () => {

	const history = useHistory()

	const [activeSize , setActiveSize ] = useState(null)

	const activeProduct = useSelector(ProductSelector.getProduct())
	const allSizes = useSelector(ProductSelector.allSizes())
	const variants = useSelector(ProductSelector.allVariants())
	const activeColor = useSelector(ProductSelector.activeColor())


	useEffect(() => {
		if(activeProduct){
			setActiveSize(activeProduct.size)
		}},[activeProduct])

	const handleActiveSize = (event,newActiveSize) => {
		setActiveSize(newActiveSize)
		const newProduct = variants.find(i =>{
			return i.size._id === newActiveSize && i.color._id === activeColor
		})
		history.push(`/product-details/${newProduct._id}`)
	}

	return (
		<>

			{activeProduct &&
		<Tabs
			value={activeSize}
			onChange={handleActiveSize}
			extcolor='primary'
			indicatorColor="primary"
			aria-label="sizes"
			sx={{'& .Mui-selected':{
				borderBottom:'1px solid black'
			}}}
			TabIndicatorProps={{
				sx: {
					height: '1px',
					bottom:'7px',

				}
			}}
		>
			{ allSizes &&
			allSizes.map(item => {

				return <Tab
					key={item.size._id}
					disableRipple
					selected={activeSize === item.size._id}
					value={item.size._id}
					label={item.size.name}
					sx={{fontSize: '14px', minWidth:'0', padding:'0' , mr:'40px'}}/>
			} )}
		</Tabs> }
		</>

	)
}

export default Sizes
