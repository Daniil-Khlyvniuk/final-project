import React, {memo, useEffect} from 'react'
import {Typography, Box, Chip, Divider} from '@mui/material'
import {userOperations, userSelectors} from '../../../store/user'
import {useDispatch, useSelector} from 'react-redux'
import ShoppingBagCard from '../../ShoppingBagCard/ShoppingBagCard'

import OrderList from './OrderList/OrderList'
import BackdropLoader from '../../UI/BackdropLoader/BackdropLoader'



const Orders = () => {

	const dispatch = useDispatch()
	const loading = useSelector(userSelectors.getIsLoading())
	const orders = useSelector(userSelectors.getUserOrders())


	useEffect(() => {
		if (!orders.length) {
			dispatch(userOperations.fetchUserOrders())
		}

	}, [orders.length, loading])


	useEffect(() =>
		() => {
			dispatch(userOperations.clearOrder())
		},
	[])


	if(!orders && !loading){
		return <OrderList/>
	}
	if(loading){
		return <BackdropLoader open={loading}/>
	}

	return (
		<>

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
				{orders.map((order , index) => {
					return (
						<Box key={index}>
							<Box
								sx={{display:'flex',
									justifyContent:'space-between',
									alignItems:'center',
									mt:'20px'
								}}
							>
								<Box
									sx={{display:'flex',
										alignItems:'center',
										justifyContent:'center'
									}}
								>
									<Box
										sx={{display:'flex',
											flexDirection:'column',
											alignItems:'center',
										}}
									>
										<Typography
											variant={'body1'}
											component={'span'}
											fontSize={'18px'}
											color={'primary'}
											fontWeight='600'
											sx={{
												textTransform:'uppercase',
												fontSize:{xs:'12px', sm:'18px'}
											}}
										>
									Order : #{order.orderNo}
										</Typography>
										<Typography
											variant={'body1'}
											component={'span'}
											fontSize={'18px'}
											color={'primary'}
											fontWeight='600'
											sx={{
												textTransform:'uppercase',
												fontSize:{xs:'12px', sm:'18px'}
											}}
										>
									Date : {order.date.toLocaleString().split('T')[0]}
										</Typography>
									</Box>
							
									<Chip label="New" variant="outlined"
										sx={{
											ml:'18px',
											display:{xs:'none', sm:'inline-block'}}}
										size="small"
									/>
								</Box>
								<Typography
									variant={'body1'}
									fontSize={'18px'}
									color={'primary'}
									fontWeight='600'
									sx={{
										textTransform:'uppercase',
										fontSize:{xs:'14px', sm:'18px'}
									}}
								>
							Price : ${order.totalSum}
								</Typography>
							</Box>
							<Divider sx={{mt:'10px'}}/>
							{order.products.map((single,index) => {
								return (<ShoppingBagCard
									key={index}
									card item={single} />)
							})}
							<Divider sx={{mt:'20px'}}/>
						</Box>
					)
				})}
			</Box>
		</>


	)
}

export default memo(Orders)