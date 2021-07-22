import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '120px',
		marginRight: '120px',
		marginTop: '50px',
		marginBottom: '50px',
	},
	profile: {
		paddingTop: '10px',
		paddingRight: '10px',
		paddingLeft: '10px',
		paddingBottom: '10px',
		display: 'flex',
		alignItems: 'center',
		borderRadius: 10,
		borderColor: '#efb6b2',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	username: {
		fontStyle: 'bold',
		paddingLeft: '10px',
		color: 'grey',
	},
	media: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '80%',
		marginBottom: '15px',
	},
	actions: {
		paddingLeft: '10px',
		paddingRight: '10px',
	},
	more: { marginLeft: 'auto' },
	list: {
		marginRight: '10px',
		'&:hover': {
			color: '#efb6b2',
		},
	},
	like: {
		'&:hover': {
			color: '#ff4833',
		},
	},
	save: {
		'&:hover': {
			color: '#bc71e1',
		},
	},
	description: {
		display: 'flex',
		flexDirection: 'column',
	},
	title: {
		color: '#6897bb',
		paddingLeft: '5px',
	},
	date: {
		color: '#6897bb',
		marginLeft: 'auto',
		paddingRight: '5px',
	},
	line: {
		height: '3px',
		width: '100%',
		backgroundColor: '#efb6b2',
		marginBottom: '20px',
		marginTop: '15px',
	},
	caption: {
		paddingLeft: '5px',
		color: 'grey',
		maxHeight: 450,
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			width: '0.4em',
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
			webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#efb6b2 0.5',
			border: '1px solid #efb6b2',
			borderRadius: 6,
		},
		'&:hover': {
			'&::-webkit-scrollbar-thumb': {
				backgroundColor: '#efb6b2',
			},
		},
	},
}));
