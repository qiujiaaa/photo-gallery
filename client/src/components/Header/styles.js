import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	header: {
		background: 'transparent',
		color: '#efb6b2',
		boxShadow: 'none',
	},
	logo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	name: {
		fontFamily: 'Noto Serif',
		fontSize: 30,
		marginLeft: '10px',
	},
}));
