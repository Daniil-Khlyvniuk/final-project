import React, {useEffect, useState} from 'react'
import {Box, Typography, Button, Divider, Stack} from '@mui/material'
import SocialLinks from '../SocialLInks'
import {makeStyles, useTheme} from '@mui/styles'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccordionProduct from './Accordion/Accordion'
import PropTypes from 'prop-types'
import Colors from './Colors'

const colors = [
	{'_id': '618b8739af938f27ec67e6ee',
		'name': 'green',
		'cssValue': '#5A5D51'},
	{'_id': '618b8739af938fee',
		'name': 'red',
		'cssValue': '#FF0000'}
]

const user = false
const useStyles = makeStyles((theme) => ({

	header:{
		display: 'flex' ,
		alignItems: 'center' ,
		justifyContent : 'space-between',
		[theme.breakpoints.down('md')]: {
			flexDirection:'column',
			alignItems: 'flex-start',
			'& .MuiListItem-root':{
				paddingLeft:0
			}
		},
	},
	actions:{display:'flex', justifyContent:'space-between', alignItems:'center' , margin:'26px 0',
		[theme.breakpoints.down('md')]:{
			flexDirection:'column',
			alignItems: 'flex-start',
		}
	},

	productId : {
		color:'rgba(92, 94, 96, 0.5)',
		lineHeight: '18px',
		textTransform: 'uppercase'
	},
	optionText:{
		color: theme.palette.primary,
		textTransform: 'uppercase',
		lineHeight: '24px',
	},
	stack:{
		display:'flex',
		alignItems:'center',


		'& .MuiButton-root': {
			fontSize: '14px',
			padding: 0,
			minWidth : 'none',

		}
	},
	sizeBtn:{
		backgroundColor: 'transparent',
		border : 'none',
		padding: 0,


	}


}))

const ProductDescription = (
	{title = 'Title' ,
		id = 123 ,
		quantity = 4,
		currentPrice =123}) => {


	const theme = useTheme()
	const classes = useStyles(theme)


	const [activeColor, setActiveColor] = useState(null)
	const [activeSize, setActiveSize] = useState(null)
	const [available, setAvailable] = useState(null)
	useEffect(()=>{
		if(quantity === 0){
			setAvailable('pre-order')
		}else if(quantity < 5){
			setAvailable('low on stock!')
		} else {
			setAvailable('Available')
		}
	}, [quantity])

	const handleActiveColor = ()=>{
	//	Set active color
		//Send req

	}

	const handleActiveSize = () => {
		//SetActiveSize
		//Send req
	}

	return (
		<Box maxWidth={537}>
			<Box className={classes.header}>
				<Typography color={'primary'} fontSize={32} sx={{textTransform: 'uppercase', letterSpacing:'4px'}}>
					{title}</Typography>
				<SocialLinks/>
			</Box>
			<Typography classes={{overline : classes.productId}} fontSize={14}  variant="overline" display="block" gutterBottom>PRODUCT ID: {id}</Typography>
			<Box>
				<Typography fontSize={14} fontWeight={600}
					className={classes.optionText}>
					color
				</Typography>
				<Box sx={{my:'10px'}}>

					{colors.map(color => {
						return <Colors key={color._id} cssValue={color.cssValue} />
					})}

				</Box>
			</Box>
			<Box>
				<Typography fontSize={14} fontWeight={600}
					classes={{root : classes.optionText}}>
					size
				</Typography>
			
				<Stack direction={'row'} className={classes.stack} >
					<Typography fontSize={'14px'} component={'button'} disableRipple variant={'body1'} className={classes.sizeBtn}>
							SINGLE</Typography>
					<Button disableRipple classes={{root: classes.singleBtn}}>
							DOUBLE</Button>
					<Button disableRipple classes={{root: classes.singleBtn}}>
							QUEEN</Button>
					<Button disableRipple classes={{root: classes.singleBtn}}>
							KING</Button>
				</Stack>
				
			</Box>
			<Box className={classes.actions}>
				<Box>
					<Typography sx={{textTransform:'uppercase'}} fontSize={24} fontWeight={600}>USD ${currentPrice}.00</Typography>
					<Typography sx={{textTransform:'uppercase'}} fontSize={14} color={'rgba(92, 94, 96, 0.5)'}>{available}</Typography>
				</Box>
				<Box >
					<Button sx={{py: '22px', px:'33px', mr:'15px'}} variant={'contained'}>
						ADD TO BAG
					</Button>
					{/* eslint-disable-next-line no-console */}
					<Button onClick={() => console.log('check')} 
						disabled={!user} sx={{p:'24px'}} variant={'contained'}>
						<FavoriteBorderOutlinedIcon fontSize={'small'}/>
					</Button>
				</Box>
			</Box>
			<Divider sx={{background:'#373F41'}}  />
			<AccordionProduct />
		</Box>
	)
}
ProductDescription.propTypes ={
	title : PropTypes.string,
	id: PropTypes.number,
	quantity: PropTypes.number,
	currentPrice: PropTypes.number
}
export default ProductDescription