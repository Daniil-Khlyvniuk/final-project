import React from 'react'
import {Box, Typography, Button, Divider} from '@mui/material'
import SocialLinks from '../SocialLInks'
import {makeStyles, useTheme} from '@mui/styles'
import CircleIcon from '@mui/icons-material/Circle'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccordionProduct from './Accordion/Accordion'

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



}))

const ProductDescription = () => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<Box maxWidth={537}>
			<Box className={classes.header}>
				<Typography color={'primary'} fontSize={32} sx={{textTransform: 'uppercase', letterSpacing:'4px'}}>
					Sweetness bed linen</Typography>
				<SocialLinks/>
			</Box>
			<Typography classes={{overline : classes.productId}} fontSize={14}  variant="overline" display="block" gutterBottom>PRODUCT ID: 10101</Typography>
			<Box>
				<Typography fontSize={14} fontWeight={600}
					className={classes.optionText}>
					color
				</Typography>
				<Box sx={{my:'10px'}}>
					<CircleIcon  sx={{width: '20px', mr:'10px',color:'#6E7181'}}/>
					<CircleIcon sx={{width: '20px' , color:'#6FB7AC', mr:'10px'}}/>
					<CircleIcon sx={{width: '20px', mr:'10px' , color:' #CDB6B4'}}/>
				</Box>
			</Box>
			<Box>
				<Typography fontSize={14} fontWeight={600}
					className={classes.optionText}>
					size
				</Typography>
				<Box >
					<Box  className={classes.stack} >
						<Button disableRipple variant={'text'} sx={{minWidth:'none' , padding: 0}}>
							SINGLE</Button>
						<Button disableRipple classes={{root: classes.singleBtn}}>
							DOUBLE</Button>
						<Button disableRipple classes={{root: classes.singleBtn}}>
							QUEEN</Button>
						<Button disableRipple classes={{root: classes.singleBtn}}>
							KING</Button>
					</Box>

				</Box>
			</Box>
			<Box className={classes.actions}>
				<Box>
					<Typography fontSize={24} fontWeight={600}>USD $150.00</Typography>
					<Typography fontSize={14} color={'rgba(92, 94, 96, 0.5)'}>PRE-ORDER</Typography>
				</Box>
				<Box >
					<Button sx={{py: '22px', px:'33px', mr:'15px'}} variant={'contained'}>
						ADD TO BAG
					</Button>
					<Button sx={{p:'24px'}} variant={'contained'}>
						<FavoriteBorderOutlinedIcon fontSize={'small'}/>
					</Button>
				</Box>
			</Box>
			<Divider sx={{background:'#373F41'}}  />
			<AccordionProduct/>
		</Box>
	)
}

export default ProductDescription