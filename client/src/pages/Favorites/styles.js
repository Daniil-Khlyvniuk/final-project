import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '20px',
		maxWidth: '1180px',
		margin: '0 auto',
		justifyContent: 'space-between'
	},
	title: theme.typography.sectionHeading,
}))