import { makeStyles } from '@mui/styles'
import theme from '../../utils/Theme'

export const useStyles = makeStyles({
	container: {
		'&:hover $blockHover': {
			visibility: 'visible',
			opacity: 1,
		},
		'&:hover $catalogTitle': {
			display: 'none',
		},
		position: 'relative',
		marginBottom: '20px'
	},
	img: {
		width: 280,
		height: 280,
	},
	catalogTitle: {
		fontSize: '18px',
		lineHeight: '30px',
		textAlign: 'center',
		color: '#FFFFFF',
		background: '#373F41',
		borderRadius: '2px',
		position: 'absolute',
		bottom: '16px',
		padding: '5px 10px',
		margin: '0 10px',
		fontFamily: theme.typography.fontFamily
	},
	blockHover: {
		cursor: 'pointer',
		transition: 'visibility 0s, opacity 0.5s linear',
		visibility: 'hidden',
		opacity: 0,
		background: 'rgba(0,0,0,0.5)',
		width: '280px',
		height: '280px',
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontWeight: 'bold',
		fontFamily: theme.typography.fontFamily,
		fontSize: 18,
		lineHeight: '30px',
		textAlign: 'center',
		color: '#FFFFFF',
		margin: '70px 0 20px',
	},
	price: {
		fontSize: 32,
		lineHeight: '25px',
		textAlign: 'center',
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		color: '#FFFFFF',
		margin: '0 0 20px',
	},
	btn: {
		background: '#FFFFFF',
		border: '1px solid #373F41',
		borderRadius: '4px',
		fontSize: 16,
		lineHeight: '16px',
		textAlign: 'center',
		fontFamily: theme.typography.h2,
		color: '#373F41',
		padding: '11px 35px',
		display: 'block',
		margin: '0 auto',
	}
})