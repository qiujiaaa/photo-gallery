import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	card: {
		width: 340,
		display: 'inline-block',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	cardmedia: {
		height: 250,
	},
	actions: {
		justifyContent: 'space-between',
	},
}));
