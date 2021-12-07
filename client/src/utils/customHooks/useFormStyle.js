import theme from '../Theme'
import { makeStyles } from '@mui/styles'

export const useFormStyle = makeStyles({
	form: {
		margin: 'auto',
	},
	formAuth: {
		maxHeight: 'calc(100vh - 200px)',
	},
	input: {
		padding: '5px',
		fontFamily: theme.typography.fontFamily,
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: 20,
		lineHeight: 24,
		marginTop: '25px',
		transition: '0.5s'
	},
	// ads: {
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	alignContent: 'center',
	// 	fontStyle: 'normal',
	// 	fontFamily: theme.typography,
	// 	fontWeight: 300,
	// 	fontSize: '14px',
	// 	lineHeight: '20px',
	// 	marginBottom: 5
	// },
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
	login: {
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

	signin: {
		textDecoration: 'none',
		padding: '5px 77px',
		border: '1px solid #000',
		borderBottom: 'none'
	},
	socialBox: {
		marginTop: '30px',
		display: 'flex',
		justifyContent: 'center',
		gap: 30
	},
	alreadyIn: {
		fontFamily: 'Mulish',
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: 14,
		lineHeight: '24px',
		textDecorationLine: 'underline',
		'& a': { color: '#373F41' }
	},
	formStatusBlock: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '10px',
		paddingBottom: '10px',
	},
	error: {
		color: 'red',
		fontSize: 15,

	},
	success: {
		color: 'green',
		fontSize: 15
	}
})