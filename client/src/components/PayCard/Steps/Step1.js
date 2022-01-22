import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useStyles } from '../../Stepper/styles'
import ShoppingBagCard from '../../ShoppingBagCard/ShoppingBagCard'
import useHandleShoppingBag from '../../../utils/customHooks/useHandleShoppingBag'
import Summary from '../Summary'
import axios from 'axios'
import { border } from '../style'

const Step1 = () => {
	const classes = useStyles()
	const { shoppingBag } = useHandleShoppingBag()
	const [parent, setParent] = useState([])

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

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Grid className={classes.containerStep1}>
			<Box
				sx={{
					// width: '70%',
					marginLeft: '4rem',
					maxWidth: 1310,
					margin: '0 auto',
				}}>
				{shoppingBag?.length > 0 && <>
					<Typography
						variant='body1'
						component={'div'}
						color='primary'
						fontSize='40px'
						fontWeight='700'
						letterSpacing='3px'
						sx={{ mb: '25px', mt: '10px' }}
					>
						Shopping Bag
					</Typography>
					<Box style={border} />
					<Box
						style={border}>
						{
							shoppingBag?.map((item, ind) =>
								<ShoppingBagCard
									key={ind}
									storquantity={item.cartQuantity}
									parent={parent[ind]}
									item={item.product} />
							)
						}
					</Box>
				</>}
			</Box>
			<Box
				sx={{
					['@media(max-width: 1000px)']: {
						width: '70%',
						margin: ' 0px 24px 0px 4rem',
					}
				}}>
				<Summary />
			</Box>
		</Grid>
	)
}

export default Step1
