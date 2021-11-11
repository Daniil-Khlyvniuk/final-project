import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
	logoWrapper: {
		width: 70,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 20,
		['@media (max-width:450px)']: {
			paddingRight: 0,
		},
	}
}))