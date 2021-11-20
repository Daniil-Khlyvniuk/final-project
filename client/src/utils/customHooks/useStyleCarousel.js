import { makeStyles } from '@mui/styles'
import theme from '../Theme'

export const useStyleCarousel = makeStyles({
	slide:{
		width: '100%',
		height: '100%',
		position: 'relative'
	},
	slideContainer: {
		position: 'relative'
	},
	nextEl: {
		cursor: 'pointer',
		width: 'fit-content',
		borderRadius: '2px',
		position: 'absolute',
		top:'50%',
		right:'-46px',
		transform:'translate(-50%, -50%)',
		background: '#FFFFFF',
		padding: '25px 24px 25px 3px',
		zIndex: 10,
		[theme.breakpoints.down('md')]:{
			padding: '13px 17px 15px 2px',
			right: '-42px'
		},
		[theme.breakpoints.down('sm')]:{
			right: '-39px'
		}
	},


	prevEl: {
		display: 'block',
		cursor: 'pointer',
		width: 'fit-content',
		borderRadius: '2px',
		position: 'absolute',
		top:'50%',
		left:'6px',
		transform:'translate(-50%, -50%)',
		background: '#FFFFFF',
		padding: '25px 4px 25px 22px',
		zIndex: 10,
		[theme.breakpoints.down('md')]:{
			padding: '14px 4px 14px 8px'
		}
	},

	textBlock: {
		position:'absolute',
		bottom: '15%',
		left: '7%',
		[theme.breakpoints.down('md')]:{

		}
	},

	title: {
		display: 'inline-block',
		fontFamily: theme.typography.h2.fontFamily,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 32,
		lineHeight: '50px',
		color: '#FFFFFF',
		backgroundColor: '#373F41',
		paddingTop: '5px',
		paddingBottom: '5px',
		paddingLeft: '8px',
		paddingRight: '8px',
		borderRadius: '2px',
		marginBottom: '-13px',
		textTransform: 'uppercase',
		[theme.breakpoints.down('md')]:{
			lineHeight: '35px',
			fontSize: 19
		},
		[theme.breakpoints.down('sm')]:{
			lineHeight: '13px',
			fontSize: 12
		}
	},
	desc:{
		fontFamily: theme.typography.h2.fontFamily,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 16,
		lineHeight: '18px',
		letterSpacing: '0.02em',
		color: '#FFFFFF',
		textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
		backgroundColor:'#373F41',
		padding: '20px',
		[theme.breakpoints.down('md')]:{
			lineHeight: '7px',
			fontSize: 14,
			padding: '15px'
		},
		[theme.breakpoints.down('sm')]:{
			lineHeight: '13px',
			fontSize: 10,
			padding: '9px'
		},
		[theme.breakpoints.between('xs', 'sm')]:{
			padding: '7px',
			fontSize: 8
		}
	},

	shopBtn:{
		cursor: 'pointer',
		width: '192px',
		height: '58px',
		background: '#FFFFFF',
		border: 'none',
		boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.45)',
		borderRadius: '4px',
		fontFamily: theme.typography.h2.fontFamily,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 16,
		lineHeight: '32px',
		color: '#373F41'
	},
	thumbWrapper:{
		'& .slick-slide': {
			opacity: 0.4
		},
		'& .slick-slide.slick-current': {
			opacity: 1
		}
	},
	thumb:{
		width: '100%',
		height: '100%',
		textAlign: 'center'
	},
	show:{
		marginTop: '20px',
		'& .slick-slide.slick-current': {
			opacity: 1
		},
		'& .slick-arrow':{
			width: '25px',
			height: '25px',
			[theme.breakpoints.down('md')]:{
				width: '20px',
				height: '20px'
			}
		}
	},
	related:{
		'& .slick-arrow': {
			width: '25px',
			height: '25px',
		}
	},
	products:{
		'& .slick-arrow': {
			width: '25px',
			height: '25px',
		}
	},
	relatedTitle:{
		textAlign: 'center',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 32,
		lineHeight: '58px',
		letterSpacing: '5px',
		color: '#373F41'
	},
	relatedTextBox:{
		// display: 'flex'
	},
	relatedText:{
		fontFamily: theme.typography,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 18,
		lineHeight: '38px',
		color: '#fff',
		backgroundColor: '#373F41',
		borderRadius: '2px',
		padding:'8px',
		display: 'inline-block'
	},
	relatedPrice:{
		fontFamily: 'Roboto, sans-serif',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '24px',
		lineHeight: '25px',
		color: '#FFFFFF',
		mixBlendModelend: 'normal',
		textShadow: '0px 4px 1px rgba(0, 0, 0, 0.25)',
		display: 'inline-block',
		backgroundColor: '#373F41',
	}
})