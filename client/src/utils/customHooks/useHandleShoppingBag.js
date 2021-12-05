import { useDispatch, useSelector } from 'react-redux'
import {shoppingBagSelectors} from '../../store/ShoppingBag'
import * as shoppingBagActions from '../../store/ShoppingBag/shoppingBagSlice'
import cartAPI from '../../utils/API/cartAPI'
// import { ProductSelector } from '../../store/Product'

export default function useHandleShoppingBag() {
	const dispatch = useDispatch()
	const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())
	const totalPrice = shoppingBag?.reduce((acc, value)=>acc+value.currentPrice,0)
	// const activeProduct = useSelector(ProductSelector.getProduct())

	const add =  (product) => {
		const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag') || '[]') || []
		const newShoppingBag = [...shoppingBag, ...[product]]
		localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag))
		dispatch(shoppingBagActions.addToShoppingBag(newShoppingBag))
		cartAPI.addProductToCart(product._id)
	}

	const remove = async (id) => {
		const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
		const newShoppingBag = [
			...shoppingBag.filter(item => item?._id !== id),
			...shoppingBag.filter(item => item?._id === id)?.slice(0, -1),
		]

		localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag))
		dispatch(shoppingBagActions.removeFromShoppingBag(newShoppingBag))
		await cartAPI.deleteProductFromCart(id)
	}


	const removeAll = async (id) => {
		const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
		const newShoppingBag = shoppingBag.filter(item => item?._id !== id)

		localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag))
		dispatch(shoppingBagActions.removeFromShoppingBag(newShoppingBag))
		await cartAPI.deleteCart(id)
	}

	const AfterBuy = async () => {
		localStorage.setItem('shoppingBag', [])
		dispatch(shoppingBagActions.removeFromShoppingBag([]))
		await cartAPI.clearCart()
	}

	return {
		add, remove, removeAll, AfterBuy,
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
