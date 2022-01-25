import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import useHandleShoppingBag from '../../utils/customHooks/useHandleShoppingBag'
import icons from '../../utils/Icons/index'
import { useStyles } from './styles'

const ShoppingBagCard = ({ item, storquantity, parent}) => {
	const classes = useStyles()
	const handleShoppingBag = useHandleShoppingBag()
	console.log(item)

	return (
		<Box className={classes.container}>
			<img className={classes.image}
				src={item?.imageUrls[0]}
				alt={'image'}/>
			<Box className={classes.desc}>
				<Typography
					className={classes.textDesc}
					fontSize={24}
					variant={'h2'}>
					{ parent?.name}
					{storquantity &&
					<svg onClick={() => handleShoppingBag.removeAll(item?._id)}
						className={classes.cross} width="20" height="20"
						viewBox="0 0 20 20" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.04338 10.0033L0.190707 18.9181C-0.0552355 19.1658 -0.0552355 19.567 0.190707 19.8147C0.313522 19.9387 0.474775 20.0004 0.635716 20.0004C0.796969 20.0004 0.957909 19.9387 1.08072 19.8147L9.99996 10.8328L18.9192 19.8147C19.0423 19.9387 19.2033 20.0004 19.3642 20.0004C19.5251 20.0004 19.6864 19.9387 19.8092 19.8147C20.0552 19.567 20.0552 19.1658 19.8092 18.9181L10.9569 10.0033L19.8152 1.0821C20.0611 0.834431 20.0611 0.433187 19.8152 0.185517C19.5692 -0.0618389 19.1708 -0.0618389 18.9251 0.185517L10.0003 9.17371L1.07447 0.185831C0.828532 -0.0615242 0.430399 -0.0615242 0.184457 0.185831C-0.0614856 0.433501 -0.0614856 0.834746 0.184457 1.08242L9.04338 10.0033Z"
							fill="#373F41"/>
					</svg>}
				</Typography>
				{storquantity && <Typography fontSize={14}>
					{parent?.manufacturer}
				</Typography>}
				<Typography fontSize={18}>
					{`$${item?.currentPrice}`}
				</Typography>

				{storquantity && <>
					<Typography
						fontSize={12}
						className={classes.textDesc}>
						color : {item.color}
					</Typography>
					<Typography
						fontSize={12}
						className={classes.textDesc}>
						size : {item.size}
					</Typography>
				</>}

				{storquantity && (<>
					<Box className={classes.specificationsContainer}>
						<Box className={classes.specifications}>
							<Typography
								fontSize={18}>{storquantity <= 0 ? 'Out of stock' : `in stock: ${item.quantity - storquantity}`}</Typography>
						</Box>
						<Box className={classes.quantityContainer}>
							<Typography
								fontSize={18}
								className={classes.quantity}>
								{storquantity}
							</Typography>
							<ButtonGroup
								orientation="vertical"
								aria-label="vertical contained button group"
								variant="contained"
							>
								<Button
									sx={{
										borderRadius: '0px',
										padding: '10px',
									}}
									disabled={storquantity <= 0}
									onClick={() => handleShoppingBag.add(item)}
									variant="outlined"
								>{icons.arrowUp()}</Button>
								<Button
									sx={{
										borderRadius: '0px',
										padding: '10px'
									}}
									onClick={() => handleShoppingBag.remove(item?._id)}
									variant='outlined'
								>
									{icons.arrowDown()}
								</Button>
							</ButtonGroup>
						</Box>
					</Box>
				</>)
				}
			</Box>
		</Box>
	)
}

ShoppingBagCard.propTypes = {
	item: PropTypes.object,
	parent: PropTypes.object,
	order: PropTypes.bool,
	card: PropTypes.bool,
	storquantity: PropTypes.number
}

export default ShoppingBagCard
