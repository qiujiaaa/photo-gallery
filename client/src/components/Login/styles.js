import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '150px',
		marginRight: '150px',
		marginTop: '50px',
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
	},
	paper: {
		height: '300px',
		width: '300px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	icon: {
		display: 'flex',
		justifyContent: 'center',
		color: '#efb6b2',
		marginBottom: '20px',
	},
	text: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '15px',
		color: 'grey',
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
	},
}));
