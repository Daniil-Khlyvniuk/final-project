import { useDispatch, useSelector } from 'react-redux'
import {shoppingBagSelectors} from '../../store/ShoppingBag'
import * as shoppingBagActions from '../../store/ShoppingBag/shoppingBagSlice'
// import { useEffect } from 'react'
import cartAPI from '../../utils/API/cartAPI'

export default function useHandleShoppingBag() {
	const dispatch = useDispatch()
	const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())
	const totalPrice = shoppingBag?.reduce((acc, value)=>acc+value.currentPrice,0)

	const add = async (product) => {
		if(!localStorage.getItem('userToken')) {
			const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]') || []
			const newShoppingBag = [...shoppingBag, ...[product]]

			localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag))
			dispatch(shoppingBagActions.addToShoppingBag(newShoppingBag))
		}else{
			await cartAPI.addProductToCart(product?.product?._id).then(res => {
				console.log('RES --> ', res)
			})

			// dispatch(shoppingBagActions.addToShoppingBag(newShoppingBag))
		}
	}

	const remove = (id) => {
		const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
		const newShoppingBag = [
			...shoppingBag.filter(item => item?._id !== id),
			...shoppingBag.filter(item => item?._id === id)?.slice(0, -1),
		]

		localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag))
		dispatch(shoppingBagActions.removeFromShoppingBag(newShoppingBag))
	}

	const removeAll = (id) => {
		const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
		const newShoppingBag = shoppingBag.filter(item => item?._id !== id)

		localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag))
		dispatch(shoppingBagActions.removeFromShoppingBag(newShoppingBag))
	}

	// useEffect(() => {
	// 	if(!shoppingBag?.length){
	// 		if(!localStorage.getItem('userToken')){
	// 			dispatch(shoppingBagActions.removeFromShoppingBag(JSON?.parse(localStorage?.getItem('shoppingBag') || '[]') || []))
	// 		}else{
	// 			cartAPI.getCart().then(res => {
	// 				dispatch(shoppingBagActions.removeFromShoppingBag(res))
	// 			})
	// 		}
	// 	}
	// }, [shoppingBag])// eslint-disable-line react-hooks/exhaustive-deps

	return {
		add, remove, removeAll,
		totalPrice,
		shoppingBag: shoppingBag
			?.reduce((acc, val) =>
				acc.some(item => item?._id === val?._id)
					? acc
					: [...acc, ...[{
						...val, amount: shoppingBag
							?.filter(item => item?._id === val?._id)
							?.length
					}]], [])
			?.sort((a, b) => b?.currentPrice - a?.currentPrice),
	}
}
