import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: '#ffffff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	iconsWrapper: {
		width: 135,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 30
	}
}))