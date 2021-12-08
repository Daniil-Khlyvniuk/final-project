import React, { useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import { favoritesOperations } from '../../store/Favorites'
import { useDispatch } from 'react-redux'
import Stepper from '../../components/Stepper/Stepper'
import { Box } from '@mui/system'
import UseSeo from '../../utils/customHooks/useSeo'

const Cart = () => {
	const { shoppingBag } = useHandleShoppingBag()
	const dispatch = useDispatch()
	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	// console.log('checkout',shoppingBagкв)

	useEffect(() => {
		favoritesOperations.fetchFavorites(favorites)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favorites.length])

	return (
		<>
			<UseSeo 
				title = {'Shopping Cart'}
				// description = {parent ? parent.description : 'Shopping cart'}
				// keywords = {
				// 	parent 
				// 		? `${parent.name}, ${parent.manufacturer},  ${parent.brand}, 
				// 		${parent.seller}, ${parent.manufacturerCountry}` 
				// 		: null
				// }
			/>
			{shoppingBag?.length === 0
				? <Box style={{ textAlign: 'center', margin: '7rem 0' }}>
					<Typography
						fontSize={32}
						sx={{ mb: '14px', mt: '85px' }}
						variant={'h2'}
					>
						YOUR BAG IS FEELING LONELY - ADD SOME BEAUTIFUL NEW TO IT!
					</Typography>
					<Link
						exact to={'/shop/catalog'}
						style={{ textDecoration: 'none' }}
					>
						<Button
							variant={'contained'}
							style={{ marginTop: '2rem' }}
						>
							CONTINUE SHOPPING
						</Button>
					</Link>
				</Box>
				: <Stepper />
			}
		</>
	)
}

export default Cart