import React from 'react'
import { Typography, Box } from '@mui/material'
import { border } from '../../pages/Cart/styles'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import {PhotoSumm, SummBox, SummText, SummTotal, SummCarts} from './style'





const Summary = () => {
	const {shoppingBag, totalPrice} = useHandleShoppingBag()


	return (
		<Box sx={{
			maxWidth: '370px',
		}}>
			<Typography
				variant='body1'
				component={'div'}
				color='primary'
				fontSize='40px'
				fontWeight='700'
				letterSpacing='3px'
				sx={{mb:'25px', mt:'10px'}}
			>
        Summary
			</Typography>
			<div style={border} />
			{shoppingBag.map( (item)=> (
			// eslint-disable-next-line react/jsx-key
				<Box style={SummCarts}>
					<Box style={SummBox}>
						<img src={item.image} style={PhotoSumm} alt={'image'}/>
						<Box style={SummText}>
							<Typography
								fontSize={24}
								sx={{mb: '14px', mt: '0px'}}
								variant={'h2'}>{item.title}
							</Typography>
							<Typography
								fontSize={18}
								sx={{mb: '14px', mt: '0px'}}
								variant={'p'}>${item.price}
							</Typography>
						</Box>
					</Box>
				</Box>
			))}
			<Box>
			</Box>
			<Box>
				<Box style={border} />
				<Box style={SummTotal}>
					<Typography fontSize={32} sx={{mb: '14px', mt: '85px'}} variant={'h2'}>TOTAL</Typography>
					<Typography fontSize={32} sx={{mb: '14px', mt: '85px'}} variant={'h2'}>${totalPrice}</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Summary