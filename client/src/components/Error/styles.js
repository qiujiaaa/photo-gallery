import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '80px',
		marginRight: '80px',
		marginTop: '50px',
		marginBottom: '50px',
		display: 'flex',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'Noto Serif',
		color: '#6897bb',
	},
	icon: {
		fontSize: 50,
		color: '#efb6b2',
		marginRight: '10px',
	},
}));
