import React from 'react'
import {Typography} from '@mui/material'
import {useStyles} from './styles'
import PropTypes from 'prop-types'
import icons from '../../utils/Icons/index'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
// import { useSelector } from 'react-redux'
// import { userSelectors } from '../../store/User'
// import { useSelector } from 'react-redux'
// import { ProductSelector } from '../../store/Product'

const ShoppingBagCard = ({ item }) => {
	const classes = useStyles()
	const handleShoppingBag = useHandleShoppingBag()

	// const user = useSelector(userSelectors.getData())
	// const isLoggedIn = !!user

	// const allColors = useSelector(ProductSelector.allColors())
	// const color = allColors?.find(color => color._id === item.color)
	//
	// const allSizes = useSelector(ProductSelector.allSizes())
	// const size = allSizes?.find(size => size._id === item.size)

	return (
		<div className={classes.container}>
			<img className={classes.image} src={item?.imageUrls[0]} alt={'image'}/>
			<div className={classes.desc}>
				<Typography fontSize={24} variant={'h2'}>{item?.product.name}</Typography>
				<Typography fontSize={14}>
					This is the luxury bedding set with
					absolutely everything in it,
					at a price that won&apos;t keep you up at night.
				</Typography>
				<Typography fontSize={18}>${item?.currentPrice}</Typography>
				<div className={classes.specificationsContainer}>
					<div className={classes.specifications}>
						<Typography fontSize={18}>Color: </Typography>
						<Typography fontSize={18}>Size: </Typography>
					</div>
					<div className={classes.quantityContainer}>
						<Typography
							fontSize={18}
							className={classes.quantity}>
							{item?.amount}
						</Typography>
						<div>
							<div
								className={classes.quantityUp}
								onClick={()=> handleShoppingBag.add(item)}
							>
								{icons.arrowUp()}
							</div>
							<div
								className={classes.quantityDown}
								onClick={()=>handleShoppingBag.remove(item?._id)}>
								{icons.arrowDown()}
							</div>
						</div>
					</div>
				</div>
				<svg onClick={() => handleShoppingBag.removeAll(item?._id)} className={classes.cross} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.04338 10.0033L0.190707 18.9181C-0.0552355 19.1658 -0.0552355 19.567 0.190707 19.8147C0.313522 19.9387 0.474775 20.0004 0.635716 20.0004C0.796969 20.0004 0.957909 19.9387 1.08072 19.8147L9.99996 10.8328L18.9192 19.8147C19.0423 19.9387 19.2033 20.0004 19.3642 20.0004C19.5251 20.0004 19.6864 19.9387 19.8092 19.8147C20.0552 19.567 20.0552 19.1658 19.8092 18.9181L10.9569 10.0033L19.8152 1.0821C20.0611 0.834431 20.0611 0.433187 19.8152 0.185517C19.5692 -0.0618389 19.1708 -0.0618389 18.9251 0.185517L10.0003 9.17371L1.07447 0.185831C0.828532 -0.0615242 0.430399 -0.0615242 0.184457 0.185831C-0.0614856 0.433501 -0.0614856 0.834746 0.184457 1.08242L9.04338 10.0033Z"
						fill="#373F41"/>
				</svg>
			</div>
		</div>
	)
}

ShoppingBagCard.propTypes = {
	item: PropTypes.object,
}

export default ShoppingBagCard