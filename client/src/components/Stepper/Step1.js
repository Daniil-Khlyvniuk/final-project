import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useStyles } from './styles'
import ShoppingBagCard from '../../components/ShoppingBagCard/ShoppingBagCard'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'


const Step1 = () => {
	const classes = useStyles()
	const { shoppingBag, totalPrice } = useHandleShoppingBag()


	return (
		<Grid className={classes.containerStep1}>
			<Box className={classes.cards}>
				{shoppingBag?.length > 0 && <>
					<Typography fontSize={32} variant={'h2'} className={classes.titleStep1}>Shopping Bag</Typography>
					<Box>
						{shoppingBag
							?.map((item, key) => <ShoppingBagCard key={key} item={item}/>)}
					</Box>
				</>}
			</Box>
			<Box>
				<Typography fontSize={32} variant={'h2'} className={classes.titleStep1}>Summary</Typography>
				<Typography fontSize={32} variant={'h2'} className={classes.price}>TOTAL USD
          ${totalPrice}</Typography>
			</Box>
		</Grid>
	)
}

export default Step1
