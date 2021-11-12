import { makeStyles } from '@mui/styles'


export const useProductDescriptionStyle = makeStyles((theme) => ({

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