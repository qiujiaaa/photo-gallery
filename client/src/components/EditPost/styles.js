import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '150px',
		marginRight: '150px',
		marginTop: '50px',
	},
	actions: {
		marginTop: '50px',
		marginLeft: '2px',
		display: 'flex',
		alignItems: 'center',
	},
	edit: {
		marginRight: '50px',
	},
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		direction: 'column',
	},
	caption: {
		flexGrow: 1,
	},
	preview: {
		marginLeft: '20px',
		fontStyle: 'italic',
	},
	previewPic: {
		maxHeight: 350,
		opacity: 1,
		borderRadius: 16,
	},
}));
