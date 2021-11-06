import { makeStyles } from '@mui/styles'
import theme from '../../utils/Theme'

export const useStyleCarousel = makeStyles({
	slide:{
		width: '1180px',
		height: '630px',
		position: 'relative'
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
		background: 'red'
	},
	title: {
		display: 'inline-block',
		fontFamily: theme.typography.h2.fontFamily,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '32px',
		lineHeight: '50px',
		color: '#FFFFFF',
		backgroundColor: '#373F41',
		paddingTop: '12px',
		paddingBottom: '12px',
		paddingLeft: '6px',
		paddingRight: '6px',
		borderRadius: '2px',
		marginBottom: '-15px'
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