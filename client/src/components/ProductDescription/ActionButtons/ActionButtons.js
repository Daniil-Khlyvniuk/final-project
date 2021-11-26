import React from 'react'
import {Button} from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import {useSelector} from 'react-redux'
import {ProductSelector} from '../../../store/Product'
import {userSelectors} from '../../../store/User'
import useHandleShoppingBag from '../../../hooks/shoppingBag/useHandleShoppingBag'

const ActionButtons = () => {
	const handleShoppingBag = useHandleShoppingBag()
	const activeProduct = useSelector(ProductSelector.getProduct())
	const parent = useSelector(ProductSelector.getParent())
	const user = useSelector(userSelectors.getToken())

	return (
		<>
			<Button
				disableRipple
				sx={{ mx:'13px' , padding:{lg: '21px 33px' ,md:'16px', sm:'10px'}}}
				variant={'contained'}
				onClick={() => handleShoppingBag.add(activeProduct)}>
				ADD TO BAG
			</Button>
			<Button
				disableRipple
				disabled={!user}
				sx={{ padding:{lg: '22px' ,md:'16px', sm:'12px', xs:'9px'}}} variant={'contained'}
			>
				<FavoriteBorderOutlinedIcon fontSize={'small'}/>
			</Button>
		</>
	)
}

export default ActionButtons
