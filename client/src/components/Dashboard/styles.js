import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '80px',
		marginRight: '80px',
		marginTop: '50px',
		marginBottom: '50px',
	},
	grid: {
		alignItems: 'center',
		justify: 'center',
	},
	item: {
		display: 'flex',
		justifyContent: 'center',
	},
	fab: {
		position: 'fixed',
		margin: 0,
		top: 'auto',
		right: 20,
		bottom: 20,
		left: 'auto',
		backgroundColor: '#efb6b2',
		color: 'white',
		'&:hover': {
			color: '#efb6b2',
			backgroundColor: 'white',
		},
	},
}));
