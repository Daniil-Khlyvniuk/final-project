import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		width: 'calc((100% / 3) - 20px)',
		maxWidth: 280,
		minWidth: 200,
		aspectRatio: 1,
		'&:hover $blockHover': {
			visibility: 'visible',
			opacity: 1,
		},
		'&:hover $catalogTitle': {
			display: 'none',
		}
	},
	img: {
		width: '100%',
		height: '100%',
	},
	catalogTitle: {
		fontSize: '18px',
		lineHeight: '30px',
		color: '#FFFFFF',
		background: '#373F41',
		borderRadius: '2px',
		position: 'absolute',
		bottom: '16px',
		padding: '5px 10px',
		margin: '0 10px',
		fontFamily: theme.typography.fontFamily,
		textTransform: 'capitalize',
		[theme.breakpoints.between('950', '1180')]: {
			fontSize: '16px'
		},
		[theme.breakpoints.between('850', '950')]: {
			fontSize: '14px'
		},
		[theme.breakpoints.between('480', '850')]: {
			fontSize: '16px'
		}
	},
	blockHover: {
		aspectRatio: 1,
		cursor: 'pointer',
		transition: 'visibility 0s, opacity 0.5s linear',
		visibility: 'hidden',
		opacity: 0,
		background: 'rgba(0,0,0,0.5)',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontFamily: theme.typography.fontFamily,
		fontSize: 18,
		lineHeight: '30px',
		textAlign: 'center',
		color: '#FFFFFF',
		margin: 0,
		textTransform: 'capitalize',
		padding: '0 30px',
		[theme.breakpoints.between('850', '1180')]: {
			fontSize: 16
		},
		[theme.breakpoints.between('650', '750')]: {
			fontSize: 16
		},
		[theme.breakpoints.between('650', '950')]: {
			padding: '0 15px'
		}
	},
	price: {
		fontSize: 32,
		lineHeight: '25px',
		textAlign: 'center',
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		color: '#FFFFFF',
		marginTop: 20,
		marginBottom: 20,
		[theme.breakpoints.between('950', '1180')]: {
			fontSize: 28
		},
		[theme.breakpoints.between('850', '950')]: {
			fontSize: 24
		},
		[theme.breakpoints.between('650', '750')]: {
			fontSize: 24
		},
	}
}))