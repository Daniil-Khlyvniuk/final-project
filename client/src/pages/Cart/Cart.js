import React from 'react'
import Stepper from '../../components/Stepper/Stepper'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import UseSeo from '../../utils/customHooks/useSeo'
import EmptyBag from './emptybag'

const Cart = () => {
	const { shoppingBag } = useHandleShoppingBag()

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