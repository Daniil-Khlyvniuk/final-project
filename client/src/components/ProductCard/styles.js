import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	card: {
		position: 'relative',
		'&:hover': {
			opacity: 0.9
		}
	},
	image: {
		maxWidth: '400px',
		width: '100%',
		height: 'auto',
		['@media(min-width: 600px)']: {
			width: '555px',
			height: '545px',
			maxWidth: 'initial'
		}
	},
	textContainer: {
		position: 'absolute',
		bottom: '10%',
		left: '10%',
		display: 'flex',
		flexDirection: 'column',
		gap: '5px',
		['@media(min-width: 600px)']: {
			top: '400px',
			left: '50px',
			bottom: '0'
		}
	},
	title: {
		background: '#373F41',
		borderRadius: '2px',
		lineHeight: '38px',
		textAlign: 'center',
		color: '#FFFFFF',
		margin: 0,
		width: 'fit-content',
		['@media(min-width: 600px)']: {
			padding: '12px 15px',
		}
	},
	price: {
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '22px',
		lineHeight: '25px',
		color: '#FFFFFF',
		padding: '6px 15px',
		margin: 0,
		background: '#373F41',
		width: 'fit-content',
		textAlign: 'center',
		textShadow: '0px 4px 1px rgba(0, 0, 0, 0.25)',
		['@media(min-width: 600px)']: {
			fontSize: '32px',
		}
	}
})

