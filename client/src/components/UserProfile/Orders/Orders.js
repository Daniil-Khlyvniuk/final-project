import React, { memo, useEffect, useState } from 'react'
import { Typography, Box, Button, Divider, Chip } from '@mui/material'
import {  userSelectors } from '../../../store/user'
import {  useSelector } from 'react-redux'
import ShoppingBagCard from '../../ShoppingBagCard/ShoppingBagCard'
import BackdropLoader from '../../UI/BackdropLoader/BackdropLoader'
import {Link} from 'react-router-dom'
import { getUserOrders } from '../../../utils/API/userAPI'
import { snackActions } from '../../../utils/customHooks/useSnackBarUtils'

const Orders = () => {
	const [userOrders, setUserOrder] = useState(null)
	const isLoading = useSelector(userSelectors.getIsLoading())

	if(isLoading){
		return <BackdropLoader/>
	}

	const fetchOrders = async() => {
		const userOrder = await getUserOrders()
		setUserOrder(userOrder.data)
	}


	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(  () => {
		try {
			fetchOrders()
		} catch (e) {
			snackActions.error(`${e}`)
		}
	},[isLoading])

	if(!userOrders){
		return (
			<Box sx={{textAlign: 'center', margin: '7rem 0'}}>
				<Typography
					fontSize={32}
					sx={{mb: '14px', mt: '85px', textTransform:'uppercase'}}
					variant={'h2'}>
					You still do not have any purchases
				</Typography>
				<Typography
					fontSize={16}
					variant={'body1'}
					sx={{mt:'25px'}}
				>
					Track your online orders to know where they are at any moment.
				</Typography>
				<Link to={'/shop/catalog'} style={{textDecoration: 'none'}}>
					<Button
						variant={'contained'}
						style={{marginTop: '2rem'}}>
						CONTINUE SHOPPING
					</Button>
				</Link>
			</Box>
		)}
	return (

		<Box mt={'25px'}>
			<Typography
				variant={'h1'}
				fontSize={'32px'}
				color={'primary'}
				textAlign={'center'}
				sx={{textTransform:'uppercase'}}
			>
				My purchases
			</Typography>
			<Divider sx={{mt:'15px'}}/>
			{/* eslint-disable-next-line no-unused-vars */}
			{userOrders.map((order , index) => {
				return (
					<Box key={index}>
						<Box
							sx={{display:'flex',
								justifyContent:'space-between',
								alignItems:'center',
								mt:'25px'}}
						>
							<Typography
								variant={'body1'}
								component={'span'}
								fontSize={'18px'}
								color={'primary'}
								fontWeight='600'
								sx={{textTransform:'uppercase'}}
							>
								Order : #{order.orderNo}
								<Chip label="New" variant="outlined"
									sx={{
										ml:'10px',
										display:{xs:'none', sm:'inline-block'}}}
									size="small"
								/>
							</Typography>
							<Typography
								variant={'body1'}
								fontSize={'18px'}
								color={'primary'}
								fontWeight='600'
								sx={{textTransform:'uppercase'}}
							>
								Price : ${order.totalSum}
							</Typography>
						</Box>
						<Divider sx={{mt:'10px'}}/>
						{order.products.map((single,index) => {
							return(<ShoppingBagCard
								key={index}
								item={single.product} />)
						})}
						<Divider sx={{mt:'20px'}}/>
					</Box>
				)
			})}
		</Box>
	)
}

export default memo(Orders)