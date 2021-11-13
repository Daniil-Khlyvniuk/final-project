import theme from '../Theme'
import { makeStyles } from '@mui/styles'

export const useFormStyle = makeStyles({
	form: {
		paddingLeft: 50,
		paddingRight: 50,
		maxWidth: '450px',
		width: '100%',
		margin: 'auto',
		overflowY: 'auto ',
	},
	formAuth: {
		maxHeight: 'calc(100vh - 200px)',
	},
	input:{
		width: 448.69,
		height: 26.06,
		fontFamily: theme.typography.fontFamily,
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: 20,
		lineHeight: 24,
		marginTop: '50px',
		transition: '0.5s'
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
		marginBottom: 5
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
		textAlign: 'left',
		'& a': {
			color: '#000'
		}
	},
	login:{
		cursor: 'pointer',
		fontFamily: theme.typography.fontFamily,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 16,
		lineHeight: '48px',
		letterSpacing: '0.04em',
		color: '#373F41',
		textDecoration: 'none',
		padding: '5px 77px',
		borderBottom: '1px solid #000'
	},

	signin:{
		textDecoration: 'none',
		padding: '5px 77px',
		border: '1px solid #000',
		borderBottom: 'none'
	},
	socialBox:{
		marginTop: '30px',
		display: 'flex',
		justifyContent: 'center',
		gap: 30
	},
	alreadyIn:{
		fontFamily: 'Mulish',
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: 14,
		lineHeight: '24px',
		textDecorationLine: 'underline',
		'& a':{color: '#373F41'}
	},
	formStatusBlock: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '10px',
		paddingBottom: '10px',
	},
	error:{
		color: 'red',
		fontSize: 15,
		
	},
	success: {
		color: 'green',
		fontSize: 15
	}
})