import {useSelector} from 'react-redux'
import {shoppingBagSelectors} from '../../store/ShoppingBag'

export default function useHandleShoppingBag() {
	const shoppingBag = useSelector(shoppingBagSelectors.getShoppingBag())
	const totalPrice = shoppingBag?.reduce((acc, value) => acc + value.price, 0)

	return {
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
			?.sort((a, b) => b?.price - a?.price),
	}
}

