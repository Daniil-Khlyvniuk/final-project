import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	container: {
		marginBottom: '4rem'
	},
	containerTitle: {
		background: '#373F41',
		padding: '2rem 4rem'
	},
	title: {
		'& span': {
			color: 'white !important'
		}
	},
	containerStep1: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: '4rem'
	},
	cards: {
		borderBottom: '1px solid grey',
		width: '70%',
		marginLeft: '4rem'
	},
	titleStep1: {
		borderBottom: '1px solid grey',
		paddingBottom: '1rem',
		marginTop: '30px !important'
	},
	price: {
		marginTop: '2rem !important'
	}
})
