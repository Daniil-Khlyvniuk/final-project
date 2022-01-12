import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { border } from './styles'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import { PhotoSumm, SummBox, SummText, SummTotal, SummCarts } from './style'
import axios from 'axios'

const Summary = () => {
	const { shoppingBag, totalPrice } = useHandleShoppingBag()
	const [parents, setParent] = useState([])
	useEffect(() => {
		Promise.all(
			shoppingBag.map(
				prod => axios(`api/products/${prod.product._id}`)
			)
		).then(res => {
			const products = res.map(({ data }) => data)
			setParent(products)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<Box sx={{
			['@media(max-width: 1180px)']: {
				width: '728px',
				padding: '0 17px 0 17px',
				marginLeft: '0 4rem',
			}
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
			{
				shoppingBag?.map((item, index) => (
					<Box style={SummCarts} key={index}>
						<Box style={SummBox}>
							<img
								src={item.product.imageUrls[0]}
								style={PhotoSumm}
								alt={'image'}
							/>
							<Box style={SummText}>
								<Typography
									fontSize={24}
									sx={{ mb: '14px', mt: '0px' }}
									variant={'h2'}>
									{parents[index]?.name}
								</Typography>
								<Typography
									fontSize={18}
									sx={{ mb: '14px', mt: '0px' }}
									variant={'p'}
								>
									${item.product.currentPrice}
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
					<Typography
						fontSize={32}
						sx={{ mb: '14px', mt: '85px' }}
						variant={'h2'}
					>
						TOTAL
					</Typography>
					<Typography
						fontSize={32}
						sx={{ mb: '14px', mt: '85px' }}
						variant={'h2'}
					>
						${totalPrice}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default Summary