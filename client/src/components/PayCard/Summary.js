import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { border } from './styles'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import { PhotoSumm, SummBox, SummText, SummTotal, SummCarts } from './style'
import axios from 'axios'
	

const Summary = () => {
	const { shoppingBag, totalPrice } = useHandleShoppingBag()
	const [parent, setParent] = useState([])

	useEffect(() => {
		Promise.all(
			shoppingBag.map(
				p => axios(`api/products/${p._id}`)
			)
		).then(res => {
			const products = res.map(({data}) => data)
			setParent(products)
		})
	}, [])


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
				sx={{ mb: '25px', mt: '10px' }}
			>
				Summary
			</Typography>
			<div style={border}/>
			{parent?.map((item) => (
				// eslint-disable-next-line react/jsx-key
				<Box style={SummCarts}>
					<Box style={SummBox}>
						<img src={item.variants.imageUrls[0]} style={PhotoSumm} alt={'image'}/>
						<Box style={SummText}>
							<Typography
								fontSize={24}
								sx={{ mb: '14px', mt: '0px' }}
								variant={'h2'}>{item.name}
							</Typography>
							<Typography
								fontSize={18}
								sx={{ mb: '14px', mt: '0px' }}
								variant={'p'}>${item.variants.currentPrice}
							</Typography>
						</Box>
					</Box>
				</Box>
			))}
			<Box>
			</Box>
			<Box>
				<Box style={border}/>
				<Box style={SummTotal}>
					<Typography fontSize={32} sx={{ mb: '14px', mt: '85px' }} variant={'h2'}>TOTAL</Typography>
					<Typography fontSize={32} sx={{ mb: '14px', mt: '85px' }} variant={'h2'}>${totalPrice}</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Summary