import {makeStyles} from '@mui/styles'

export const useStyles = makeStyles({
	image: {
		width: '555px',
		height: '545px'
	},
	card: {
		position: 'relative'
	},
	textContainer: {
		position: 'absolute',
		top: '400px',
		left: '50px',
		display: 'flex',
		flexDirection: 'column',
		gap: '5px'
	},
	title: {
		background: '#373F41',
		borderRadius: '2px',
		fontSize: '24px',
		lineHeight: '38px',
		textAlign: 'center',
		color: '#FFFFFF',
		padding: '12px 15px',
		margin: 0
	},
	price: {
		fontSize: '32px',
		lineHeight: '25px',
		color: '#FFFFFF',
		padding: '6px 15px',
		margin: 0,
		background: '#373F41',
		maxWidth: '107px',
		textAlign: 'center'
	}
})

