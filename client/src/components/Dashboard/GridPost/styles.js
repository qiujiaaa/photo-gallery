import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 345,
		display: 'inline-block',
	},
	cardmedia: {
		height: 250,
	},
	actions: {
		justifyContent: 'space-between',
	},
}));
