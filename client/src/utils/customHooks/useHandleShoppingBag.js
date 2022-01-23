import { useDispatch, useSelector } from 'react-redux'
import {shoppingBagSelectors, shoppingBagOperations} from '../../store/shoppingBag'
import { userSelectors } from '../../store/user'
import cartAPI from '../../utils/API/cartAPI'
// import axios from 'axios'

export default function useHandleShoppingBag() {
	const dispatch = useDispatch()
	const isLoggedIn = !!useSelector(userSelectors.getData())
	const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())
	const totalPrice = shoppingBag?.reduce((acc, prodObject) =>
		acc + (prodObject.product.currentPrice * prodObject.cartQuantity)
	, 0)
	const totalProductsQuanity = shoppingBag?.reduce(
		(acc, prodObject) => acc + prodObject.cartQuantity, 0)

	const add = (product) => {
		const newProduct = {cartQuantity: 1, product}
		const bag = shoppingBag.map( prod => prod.product._id === product._id
			? {
				...prod,
				cartQuantity: (prod.cartQuantity + 1 <= prod.product.quantity)
					? prod.cartQuantity + 1
					: prod.product.quantity
			}
			: prod
		)
		if(bag.findIndex(	prod => prod.product._id === product._id ) === -1)
		{
			bag.push(newProduct)
		}
		dispatch(shoppingBagOperations.setData(bag))
		cartAPI.addProductToCart(product._id)
	}

	// const remove = async (id) => {
	const remove = (id) => {
		const bag = shoppingBag
			.map( prod => prod.product._id === id
				? {
					...prod,
					cartQuantity: prod.cartQuantity - 1
				}
				: prod
			)
			.filter(prod => prod.cartQuantity > 0)

		dispatch(shoppingBagOperations.setData(bag))
	}


	// const removeAll = async (id) => {
	const removeAll = (id) => {
		const bag = shoppingBag.filter(prodObject => prodObject.product._id !== id)
		dispatch(shoppingBagOperations.setData(bag))
	}

	const clearAfterBuy = async () => {
		localStorage.setItem('shoppingBag', [])
		dispatch(shoppingBagOperations.setData([]))
		if(isLoggedIn)
		{
			await cartAPI.clearCart()
		}
	}
	
	// const getParent = (kids) => {
	// 	Promise.all(
	// 		kids.map(
	// 			prod => axios(`api/products/${prod.product._id}`)
	// 		)
	// 	).then(res => {
	// 		const ss = res.map(({ data }) => data)
	// 		console.log(ss)
	// 	})
	// }


	return {
		add, remove, removeAll, clearAfterBuy,
		// getParent,
		totalPrice,
		totalProductsQuanity,
		shoppingBag,
	}
}