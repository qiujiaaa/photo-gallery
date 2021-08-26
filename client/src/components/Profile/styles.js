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
		marginBottom: '20px',
	},
	stats: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: '10px',
		marginLeft: '10px',
		marginRight: '10px',
		marginBottom: '10px',
		textTransform: 'uppercase',
	},
	line: {
		width: '1px',
		backgroundColor: '#efb6b2',
		marginLeft: '10px',
		marginRight: '10px',
	},
	paper: {
		border: '1px solid #efb6b2',
	},
	stat: {
		paddingLeft: '20px',
		paddingRight: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	number: {
		color: '#6897bb',
	},
	label: {
		color: 'grey',
	},
	posts: {
		display: 'flex',
		justifyContent: 'center',
	},
	post: {
		maxHeight: 300,
		opacity: 0.9,
		borderRadius: 16,
		'&:hover': {
			cursor: 'pointer',
			opacity: 1,
		},
	},
	item: {
		display: 'flex',
		justifyContent: 'center',
	},
	functions: {
		marginTop: '30px',
		width: '100%',
	},
	likes: {
		'&:hover': {
			'& $likeicon': {
				color: '#ff4833',
			},
		},
	},
	likeicon: {},
	bookmarks: {
		'&:hover': {
			'& $bookmarkicon': {
				color: '#bc71e1',
			},
		},
	},
	bookmarkicon: {},
	logout: {
		'&:hover': {
			'& $logouticon': {
				color: '#efb6b2',
			},
		},
		display: 'flex',
		alignItems: 'center',
		marginTop: '10px',
	},
	logouticon: {},
}));
