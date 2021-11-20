import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
	image: {
		width: '200px',
		height: '200px'
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px',
		borderBottom: '1px solid grey',
		position: 'relative',
		gap: '80px',
		alignItems: 'center',
		'& h2': {
			margin: '0',
		},
		'& span': {
			margin: '0'
		},
		['@media(min-width: 600px)']:{
			flexDirection: 'row',
			alignItems: 'flex-start',
		}
	},
	cross: {
		position: 'absolute',
		top: '20px',
		right: '20px',
		cursor: 'pointer'
	},
	desc: {
		maxWidth: '400px',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem'
	},
	cards: {
		borderTop: '1px solid grey',
		marginBottom: '7rem'
	}
}))