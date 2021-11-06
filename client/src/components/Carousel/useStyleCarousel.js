import { makeStyles } from '@mui/styles'
import theme from '../../utils/Theme'

export const useStyleCarousel = makeStyles({
	slide:{
		width: '1180px',
		height: '630px',
		position: 'relative',

	},
	arrowLeft:{
		width: '25px',
		height: '25px',
		borderTop: '2px solid #5C5E60',
		borderRight: '2px solid #5C5E60',
		marginRight: '60px',
		transform: 'rotate(-135deg)'
	},
	arrowRight: {
		width: '25px',
		height: '25px',
		borderTop: '2px solid #5C5E60',
		borderRight: '2px solid #5C5E60',
		marginRight: '60px',
		transform: 'rotate(45deg)'
	},
	nextEl: {
		position: 'absolute',
		top:'50%',
		right:'-3%',
		transform:'translate(-50%, -50%)',
		background: '#FFFFFF',
		borderRadius: '2px',
		padding: '25px 24px 25px 0',
		width: '20px',
		zIndex: 10,
		cursor: 'pointer'
	},
	prevEl: {
		position: 'absolute',
		top:'50%',
		left:'1%',
		transform:'translate(-50%, -50%)',
		background: '#FFFFFF',
		borderRadius: '2px',
		padding: '25px 4px 25px 22px',
		width: '20px',
		zIndex: 10,
		cursor: 'pointer'
	},
	textBlock: {
		position:'absolute',
		bottom: '100px',
		left: '50px'
	},
	pagination:{
		marginTop: '20px',
		'& .swiper':{
			borderRadius: '4px',
		},
		'& .swiper-pagination-horizontal':{
			bottom:'1px',
			background: '#fff',
			// position: 'fixed',
			'& .swiper-pagination-bullet':{
				margin: 0
			}
		},
		'& .swiper-pagination-bullet':{
			width: '15%',
			height:  '2px',
			background: 'black',
			borderRadius: '0'
		},
		'& .swiper-pagination-bullet-active':{
			'&::before':{
				content: '""',
				display: 'block',
				height: '2px',
				width: '100%',
				borderBottom: '3px solid #000',
			}
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
		marginBottom: '-13px'
	},
	desc:{
		fontFamily: theme.typography.h2.fontFamily,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '18px',
		letterSpacing: '0.02em',
		color: '#FFFFFF',
		textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
		backgroundColor:'#373F41',
		padding: '20px'
	},
	ads:{

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
	}
})