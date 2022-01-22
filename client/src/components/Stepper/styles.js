import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	container: {
		marginBottom: '4rem'
	},
	containerTitle: {
		// background: '#373F41',
		// width: '100%',
		['@media(min-width: 768px)']: {
			padding: '2rem 4rem'
		},

	},
	title: {
		'& span': {
			color: 'white !important',
			fontSize: '12px',
			['@media(min-width: 425px)']: {
				fontSize: '1em',
			}
		}
	},
	containerStep1: {
		display: 'grid',
		columnGap: '5%',
		rowGap: 1,
		gridTemplateColumns: 'repeat(1, 1fr)',
		['@media(min-width: 1000px)']: {
			columnGap: '0%',
			rowGap: 1,
			gridTemplateColumns: '75% 20%',
			['@media(min-width: 650px)']: {
				columnGap: '0%',
				rowGap: 1,
				gridTemplateColumns: '65% 30%',
			},
		// width: '852px''
		},

	},
	cards: {
		width: '70%',
		marginLeft: '4rem'
	},
	price: {
		marginTop: '2rem !important'
	},
})




