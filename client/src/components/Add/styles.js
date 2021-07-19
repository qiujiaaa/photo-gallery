import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '150px',
		marginRight: '150px',
		marginTop: '50px',
	},
	misc: {
		marginTop: '50px',
		display: 'flex',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		direction: 'column',
	},
	caption: {
		paddingTop: 3,
		height: 250,
		flexGrow: 1,
	},
	preview: {
		marginLeft: '20px',
		background: '#efb6b2',
		height: 350,
		width: 350,
		borderRadius: 16,
		opacity: 0.3,
	},
}));
