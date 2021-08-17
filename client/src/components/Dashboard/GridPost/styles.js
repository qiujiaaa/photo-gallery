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
		marginLeft: '5px',
		color: 'grey',
		'&:hover': {
			color: '#ff4833',
		},
	},
	unlike: {
		marginLeft: '5px',
		color: '#ff4833',
		'&:hover': {
			color: 'grey',
		},
	},
	user: {
		'&:hover': {
			color: '#6897bb',
		},
	},
}));
