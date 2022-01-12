import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useStyles } from './styles'
import ShoppingBagCard from '../../components/ShoppingBagCard/ShoppingBagCard'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import Summary from '../PayCard/Summary'
import axios from 'axios'

const Step1 = () => {
	const classes = useStyles()
	const { shoppingBag, totalPrice } = useHandleShoppingBag()
	const [ parent, setParent ] = useState([])

	useEffect(() => {
		Promise.all(
			shoppingBag.map(
				prod => axios(`api/products/${prod.product._id}`)
			)
		).then(res => {
			const products = res.map(({ data }) => data)
			setParent(products)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<Grid className={classes.containerStep1}>
			<Box className={classes.cards}>
				{shoppingBag?.length > 0 && <>
					<Typography
						fontSize={32}
						variant={'h2'}
						className={classes.titleStep1}
					>
						Shopping Bag
					</Typography>
					<Box>
						{
							shoppingBag?.map((item, ind) =>
								<ShoppingBagCard
									key={ind}
									storquantity={item.cartQuantity}
									parent={parent[ind]}
									item={item.product}/>
							)
						}
					</Box>
				</>}
			</Box>
			<Box sx={{
				['@media(max-width: 1000px)']: {
					width: '70%',
					// marginLeft: '4rem',
					borderBottom: '1px solid grey',
					margin: ' 0px 24px 0px 4rem',
				}
			}}>
				<Summary/>
				<Typography
					fontSize={32}
					variant={'h2'}
					className={classes.price}
				>
					TOTAL USD ${totalPrice}
				</Typography>
			</Box>
		</Grid>
	)
}

export default Step1
