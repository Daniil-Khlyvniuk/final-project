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
		columnGap: '5%',
		rowGap: 1,
		gridTemplateColumns: 'repeat(1, 1fr)',
		['@media(min-width: 650px)']: {
			columnGap: '5%',
			rowGap: 1,
			gridTemplateColumns: '20% 75%',
			// width: '852px''
		}
	},
	leftSide: {
		margin: '0 auto',
		width: '100%',
		['@media(min-width: 650px)']: {
			width: '100%',
			margin: 'auto',
		}
	},
	rightSide: {
		margin: 'auto',
		width: '100%'
		// ['@media(min-width: 720px)']: {
		// 	width: '400px',
		// },
		// ['@media(min-width: 860px)']: {
		// 	width: '552px',
		// },
		// ['@media(min-width: 1180px)']: {
		// 	width: '852px',
		// }
	}

})

