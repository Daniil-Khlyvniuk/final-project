import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
	image: {
		width: '200px',
		height: '200px'
	},
	container: {
		display: 'flex',
		padding: '20px',
		borderBottom: '1px solid grey',
		position: 'relative',
		gap: '80px',
		alignItems: 'flex-start',
		'& h2': {
			margin: '0',
		},
		'& span': {
			margin: '0'
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