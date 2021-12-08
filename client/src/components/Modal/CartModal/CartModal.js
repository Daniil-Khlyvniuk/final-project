import React from 'react'
import BasicModal from '../Modal'
import useHandleShoppingBag from '../../../utils/customHooks/useHandleShoppingBag'
import CardInModal from '../../CardInModal/CardInModal'
import { Button, GlobalStyles, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import modalActions from '../../../store/Modal'
import { style } from './styles'
import { useStyles } from '../../ShoppingBagCard/styles'
import { shoppingBagSelectors } from '../../../store/ShoppingBag'

const CartModal = () => {
	const { shoppingBag, totalPrice } = useHandleShoppingBag()
	const dispatch = useDispatch()
	const handleClose = () => dispatch(modalActions.modalToggle(false))
	const handleShoppingBag = useHandleShoppingBag()
	const classes = useStyles()
	const shoppingBagItem = useSelector(shoppingBagSelectors.getShoppingBag())

	return (
		<BasicModal
			style={style.modal}
			body={
				<Box>
					{shoppingBag?.length
						? <Box>
							<GlobalStyles
								styles={{
									'*::-webkit-scrollbar': {
										width: '0.2em',
									},
									'*::-webkit-scrollbar-thumb': {
										backgroundColor: '#373F41',
										outline: '1px solid slategrey',
									},
								}}
							/>
							<Typography
								fontSize={16}>
								BAG: ({shoppingBagItem.length})
							</Typography>
							<Typography
								fontSize={18}
								style={style.title}>
								TOTAL: USD ${totalPrice}.00
							</Typography>
							<Link exact='true' to={'/cart'} style={style.link}>
								<Button
									onClick={handleClose}
									variant={'contained'}
									style={style.button}>
									CHECKOUT
								</Button>
							</Link>
							<Box>
								{shoppingBag?.map((item, key) => 
									(
										// eslint-disable-next-line react/jsx-key
										<Box sx={{
											position: 'relative',
										}}>
											<CardInModal
												price={item?.currentPrice + '.00'}
												image={'/' + item.imageUrls[0]}
												title={item?.title}
												key={key}
												color={item?.color?.name}
												amount={item?.amount}
											/>
											<Box>
												<svg onClick={
													() => handleShoppingBag.removeAll(item?._id)}
												className={classes.crossModal}>
													<path
														d="M9.04338 10.0033L0.190707 18.9181C-0.0552355 19.1658 -0.0552355 19.567 0.190707 19.8147C0.313522 19.9387 0.474775 20.0004 0.635716 20.0004C0.796969 20.0004 0.957909 19.9387 1.08072 19.8147L9.99996 10.8328L18.9192 19.8147C19.0423 19.9387 19.2033 20.0004 19.3642 20.0004C19.5251 20.0004 19.6864 19.9387 19.8092 19.8147C20.0552 19.567 20.0552 19.1658 19.8092 18.9181L10.9569 10.0033L19.8152 1.0821C20.0611 0.834431 20.0611 0.433187 19.8152 0.185517C19.5692 -0.0618389 19.1708 -0.0618389 18.9251 0.185517L10.0003 9.17371L1.07447 0.185831C0.828532 -0.0615242 0.430399 -0.0615242 0.184457 0.185831C-0.0614856 0.433501 -0.0614856 0.834746 0.184457 1.08242L9.04338 10.0033Z"
														fill="#373F41"/>
												</svg>
											</Box>
										</Box>
									))}
							</Box>
						</Box>
						: <Box style={{ margin: '3rem auto' }}>
							<Typography
								fontSize={32}
								variant={'h2'}
								style={{ textAlign: 'center', padding: '0 2rem' }}>
								Your bag is feeling lonely - add some beautiful new to it!
							</Typography>
							<Button
								variant={'contained'}
								style={{ margin: '2rem auto 0', display: 'block' }}
								onClick={handleClose}>
								CONTINUE SHOPPING
							</Button>
						</Box>}
				</Box>}
		/>
	)
}

export default CartModal