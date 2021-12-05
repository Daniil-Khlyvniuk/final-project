import { makeStyles } from '@mui/styles'

export const useProductDescriptionStyle = makeStyles((theme) => ({
	header:{
		display: 'flex' ,
		alignItems: 'center' ,
		justifyContent : 'space-between',
		[theme.breakpoints.down('md')]: {
			flexDirection:'column',
			alignItems: 'center',
			'& .MuiListItem-root':{
				paddingLeft:0
			}
		},
	},
	actions:{display:'flex', justifyContent:'space-between', alignItems:'center' , margin:'26px 0',
		[theme.breakpoints.down('md')]:{
			flexDirection:'row',
			alignItems: 'center',
		},
		[theme.breakpoints.down('sm')]:{
			flexDirection:'column',
			alignItems: 'center',
		}
	},
	price:{
		[theme.breakpoints.down('sm')]:{
			marginBottom: '15px'
		}
	},
	productId : {
		color:'rgba(92, 94, 96, 0.5)',
		lineHeight: '18px',
		textTransform: 'uppercase',
		[theme.breakpoints.down('md')]:{
			textAlign: 'end'
		}
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
		borderBottom: '1px',
		borderColor:'black'
	},
	indicator:{
		height: '1px',
		bottom: '7px'
	},
	activeColorBtn:{
		padding:'0',
		borderRadius: '20px',
		height:'20px',
		mr:'10px',
		borderColor:'black'
	},
	productActions:{
		display:'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('md')]:{
			flexDirection:'row !important',
		}
	}
}))