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
		// borderBottom: '1px solid grey',
		position: 'relative',
		gap: '15px',
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
			gap: '60px',
		}
	},
	cross: {
		// position: 'absolute',
		padding: '0 20px',
		cursor: 'pointer'
	},
	crossModal: {
		width: '20px',
		position: 'absolute',
		top: '20px',
		right: '20px',
		cursor: 'pointer'
	},
	desc: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem'
	},
	quantityContainer: {
		display: 'flex',
		alignItems: 'center',
		border: '1px solid #373F41',
		borderRadius: '2px',
		width: 'fit-content',
	},
	quantity: {
		padding: '0 15px',
	},
	quantityDown: {
		padding: '5px 10px',
		cursor: 'pointer'
	},
	specificationsContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	specifications: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: '5px'
	},
	textDesc :{
		display: 'flex',
		justifyContent: 'space-between',
		textTransform:'uppercase',
		color:'#000'
	}
}))
