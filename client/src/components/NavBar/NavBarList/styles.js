import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
	navbar: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 0,
		listStyle: 'none',
		gap: 40
	},
	navbarLink: {
		color: '#373F41',
		textDecoration: 'none',
	},
	navbarLinkActive: {
		textDecoration: 'underline'
	}
}))