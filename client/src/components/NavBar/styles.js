import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
	appbar: {
		'& .css-17f6boi-MuiToolbar-root': {
			padding: 0
		}
	},
	header: {
		backgroundColor: '#ffffff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	iconsWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 30,
		['@media (max-width:750px)']: {
			gap: 20
		},
		['@media (max-width:450px)']: {
			gap: 5
		},
		padding: '10px 10px 10px 0'
	}
}))