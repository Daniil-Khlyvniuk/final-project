import theme from '../../../utils/Theme'
import {makeStyles} from '@mui/styles'

export const useFormStyle = makeStyles({
	form: {
		paddingLeft: 50,
		paddingRight: 50,
		width: 'min-content',
		margin: 'auto'
	},
	ads: {
		display: 'flex',
		alignItems: 'center',
		alignContent: 'center',
		fontStyle: 'normal',
		fontWeight: 300,
		fontFamily: theme.typography.h2.fontFamily,
		fontSize: 15,
		marginBottom: 30
	},
	submit: {
		width: 240,
		height: 50.47,
		background: '#373F41',
		boxShadow: '0, 1, 1, rgba(0, 0, 0, 0.25)',
		borderRadius: 4,
		color: '#ffffff',
		fontFamily: theme.typography.h2.fontFamily,
		fontStyle: 'normal',
		letterSpacing: 0.05,
		cursor: 'pointer',
		display: 'block',
		margin: 'auto',
	}
})