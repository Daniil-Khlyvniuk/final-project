import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	card: {
		position: 'relative',
		'&:hover': {
			opacity: 0.9
		}
	},
	image: {
		width: '100%',
	},
	textContainer: {
		position: 'absolute',
		bottom: '10%',
		left: '10%',
		display: 'flex',
		flexDirection: 'column',
		gap: '5px',
	},
	title: {
		background: '#373F41',
		borderRadius: '2px',
		lineHeight: '38px',
		color: '#FFFFFF',
		margin: 0,
		width: 'fit-content',
		padding: '12px 15px',
	},
	price: {
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '32px',
		lineHeight: '25px',
		color: '#FFFFFF',
		padding: '6px 15px',
		margin: 0,
		background: '#373F41',
		width: 'fit-content',
		textAlign: 'center',
		textShadow: '0px 4px 1px rgba(0, 0, 0, 0.25)',
		['@media (max-width:850px)']: {
			fontSize: '25px'
		},
		['@media (max-width:768px)']: {
			fontSize: '20px'
		},
	}
})

