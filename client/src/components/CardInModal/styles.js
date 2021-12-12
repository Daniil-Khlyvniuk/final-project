import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	card: {
		width: '100%',
		position: 'relative',
		margin: '0 0 1rem'
	},
	image: {
		width: '100%'
	},
	textContainer: {
		position: 'absolute',
		bottom: '10px',
		left: '10px',
		display: 'flex',
		flexDirection: 'column'
	},
	desc: {
		display: 'block',
		borderRadius: '1px',
		background: '#373F41',
		width: 'fit-content',
		color: 'white',
		padding: '2px',
		textTransform: 'uppercase',
	},
})
