import theme from '../../../utils/Theme'
import { makeStyles } from '@mui/styles'

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
		fontFamily: theme.typography,
		fontWeight: 300,
		fontSize: '14px',
		lineHeight: '20px',
		marginBottom: 30
	},
	submit: {
		width: 240,
		height: 50.47,
		background: '#373F41',
		boxShadow: '0, 1, 1, rgba(0, 0, 0, 0.25)',
		borderRadius: 4,
		color: '#ffffff',
		fontFamily: 'Abel, sans-serif',
		fontStyle: 'normal',
		fontWeight: 'lighter',
		letterSpacing: 0.05,
		cursor: 'pointer',
		display: 'block',
		margin: 'auto',
		fontSize: '18px',
		lineHeight: '32px'
	},
	policy: {
		fontFamily: theme.typography.fontFamily,
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: '14px',
		lineHeight: '36px',
		color: '#8C8C8C',
		textAlign: 'left'
	}
})