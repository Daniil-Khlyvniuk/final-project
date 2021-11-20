import React from 'react'
import {Button} from '@mui/material'
import shoppingBagReducer from '../../../store/ShoppingBag'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import {useDispatch, useSelector} from 'react-redux'
import {ProductSelector} from '../../../store/Product'
import {userSelectors} from '../../../store/User'

const ActionButtons = () => {
	const dispatch = useDispatch()
	const activeProduct = useSelector(ProductSelector.getProduct())

	const user = useSelector(userSelectors.getToken())
	return (
		<>
			<Button disableRipple
				sx={{py: '22px', px:'33px', mr:'13px'}}
				variant={'contained'}
				onClick={()=>{
					// eslint-disable-next-line max-len
					dispatch(shoppingBagReducer.addToShoppingBag({...activeProduct, amount:1}))
				}}
			>
				ADD TO BAG
			</Button>
			<Button disableRipple
				disabled={!user}
				sx={{p:'24px'}} variant={'contained'}
			>
				<FavoriteBorderOutlinedIcon fontSize={'small'}/>
			</Button>
		</>
	)
}

export default ActionButtons