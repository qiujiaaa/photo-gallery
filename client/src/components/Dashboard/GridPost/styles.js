import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	card: {
		width: 340,
		display: 'inline-block',
		'&:hover': {
			cursor: 'pointer',
			opacity: 0.9,
		},
	},
	cardmedia: {
		height: 250,
	},
	actions: {
		justifyContent: 'space-between',
		marginLeft: '5px',
	},
	like: {
		color: 'grey',
		'&:hover': {
			color: '#ff4833',
		},
	},
	user: {
		'&:hover': {
			color: '#6897bb',
		},
	},
}));
