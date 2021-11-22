import {makeStyles} from '@mui/styles'

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
		top: '235px',
		left: '13px',
		padding: '5px 10px',
		margin: 0,
	},
	blockHover: {
		cursor: 'pointer',
		transition: 'visibility 0s, opacity 0.5s linear',
		visibility: 'hidden',
		opacity: 0,
		// display: 'none',
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
		color: '#373F41',
		padding: '11px 35px',
		display: 'block',
		margin: '0 auto',
	}


})