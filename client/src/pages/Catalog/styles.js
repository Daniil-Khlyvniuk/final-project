import {makeStyles} from '@mui/styles'
export const textStyle = {
	color: '#373F41',
	fontSize: '32px',
	display: 'flex',
	justifyContent: 'center',
	margin: '50px auto',
	textTransform: 'uppercase',
}


export const useStyles = makeStyles({
	MainGrd: {
		display: 'grid',
		columnGap: 1,
		rowGap: 1,
		gridTemplateColumns: 'repeat(1, 1fr)',
		['@media(min-width: 650px)']: {
			display: 'grid',
			columnGap: 1,
			rowGap: 1,
			gridTemplateColumns: 'repeat(2, 1fr)',
			// width: '852px',

		}
	},
	leftSide: {
		margin: '0 auto',
		width: '100%',
		['@media(min-width: 650px)']: {
			width: '280px',
			margin: 'auto',
		}
	},
	rightSide: {
		margin: 'auto',
		['@media(min-width: 600px)']: {
			width: '400px',
		},
		['@media(min-width: 800px)']: {
			width: '552px',
		},
		['@media(min-width: 1130px)']: {
			width: '852px',
		}
	}

})

