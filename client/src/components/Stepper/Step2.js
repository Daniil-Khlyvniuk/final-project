import React from 'react'
import { Typography } from '@mui/material'
import { useStyles } from './styles'
import ShoppingBagCard from '../../components/ShoppingBagCard/ShoppingBagCard'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'

const Step2 = () => {
	const classes = useStyles()
	const { shoppingBag, totalPrice } = useHandleShoppingBag()


	return (
		<div className={classes.containerStep1}>
			<div className={classes.cards}>
				{shoppingBag?.length > 0 && <>
					<Typography fontSize={32} variant={'h2'} className={classes.titleStep1}>Shopping Bag</Typography>
					<div>
						{shoppingBag
							?.map((item, key) => <ShoppingBagCard key={key} item={item}/>)}
					</div>
				</>}
			</div>
			<div style={{width: '30%', marginRight: '4rem'}}>
				<Typography fontSize={32} variant={'h2'} className={classes.titleStep1}>Summary</Typography>
				<Typography fontSize={32} variant={'h2'} className={classes.price}>TOTAL USD
					${totalPrice}</Typography>
			</div>
		</div>
	)
}

export default Step2
