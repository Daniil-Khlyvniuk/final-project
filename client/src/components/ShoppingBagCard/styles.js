import {makeStyles} from '@mui/styles'

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
		['@media(min-width: 600px)']: {
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
	quantityContainer: {
		display: 'flex',
		alignItems: 'center',
		border: '1px solid #373F41',
		borderRadius: '2px',
		width: 'fit-content'
	},
	quantity: {
		padding: '0 15px',
	},
	quantityUp: {
		padding: '5px 10px',
		borderLeft: '1px solid #373F41',
		borderBottom: '1px solid #373F41',
		cursor: 'pointer'
	},
	quantityDown: {
		padding: '5px 10px',
		borderLeft: '1px solid #373F41',
		cursor: 'pointer'
	},
	specificationsContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: '85px'
	},
	specifications: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: '5px'
	}
}))
