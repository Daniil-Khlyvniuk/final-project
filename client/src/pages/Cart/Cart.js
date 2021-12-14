import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Stepper from '../../components/Stepper/Stepper'
import { favoritesOperations } from '../../store/Favorites'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import UseSeo from '../../utils/customHooks/useSeo'
import EmptyBag from './emptybag'


const Cart = () => {
	const { shoppingBag } = useHandleShoppingBag()
	const dispatch = useDispatch()
	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	useEffect(() => {
		favoritesOperations.fetchFavorites(favorites)(dispatch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ favorites.length ])

	return (
		<>
			<UseSeo
				title={ 'Shopping Cart' }
			/>
			{ shoppingBag?.length === 0
				?
				<EmptyBag />
				:
				<Stepper />
			}
		</>
	)
}

export default Cart