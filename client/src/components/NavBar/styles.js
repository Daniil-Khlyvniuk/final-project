import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: '#ffffff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	iconsWrapper: {
		width: 150,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 30
	}
}))