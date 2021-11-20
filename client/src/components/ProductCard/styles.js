import {makeStyles} from '@mui/styles'

export const useStyles = makeStyles({
	image: {
		maxWidth:'400px',
		width: '100%',
		height: 'auto',
		['@media(min-width: 600px)']:{
			width: '555px',
			height: '545px',
			maxWidth: 'initial'
		}
	},
	card: {
		position: 'relative'
	},
	textContainer: {
		position: 'absolute',
		bottom: '10%',
		left: '10%',
		display: 'flex',
		flexDirection: 'column',
		gap: '5px',
		['@media(min-width: 600px)']:{
			top: '400px',
			left: '50px',
			bottom: '0'
		}
	},
	title: {
		background: '#373F41',
		borderRadius: '2px',
		fontSize: '14px',
		lineHeight: '38px',
		textAlign: 'center',
		color: '#FFFFFF',
		padding: '5px 5px',
		margin: 0,
		width: 'fit-content',
		['@media(min-width: 600px)']:{
			fontSize: '24px',
			padding: '12px 15px',
		}
	},
	price: {
		fontSize: '22px',
		lineHeight: '25px',
		color: '#FFFFFF',
		padding: '6px 15px',
		margin: 0,
		background: '#373F41',
		width: 'fit-content',
		textAlign: 'center',
		['@media(min-width: 600px)']:{
			fontSize: '32px',
		}
	}
})

