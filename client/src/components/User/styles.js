import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '100px',
		marginRight: '100px',
		marginTop: '50px',
	},
	profile: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		direction: 'column',
		paddingTop: '40px',
		paddingBottom: '40px',
	},
	dp: {
		width: '100px',
		height: '100px',
		marginBottom: '20px',
	},
	name: {
		color: 'grey',
		fontStyle: 'bold',
	},
}));
