import { makeStyles } from '@mui/styles'
import theme from '../Theme'

export const useStyleCarousel = makeStyles({
	slide:{
		width: '100%',
		height: '100%',
		position: 'relative'
	},
	slideProducts:{
		width: '100%',
		height: '100%',
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
		right:'-56px',
		transform:'translate(-50%, -50%)',
		background: '#FFFFFF',
		padding: '25px 24px 25px 3px',
		zIndex: 10,
	},

	prevEl: {
		display: 'block',
		cursor: 'pointer',
		width: 'fit-content',
		borderRadius: '2px',
		position: 'absolute',
		top:'50%',
		left:'0',
		transform:'translate(-50%, -50%)',
		background: '#FFFFFF',
		padding: '25px 4px 25px 22px',
		zIndex: 10,
	},

	textBlock: {
		position:'absolute',
		bottom: '100px',
		left: '50px'
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
		textTransform: 'uppercase'
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
		'& .slick-slide.slick-current': {
			opacity: 1
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
	}
})