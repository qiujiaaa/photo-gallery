import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '100px',
		marginRight: '100px',
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
		flexGrow: 1,
	},
	preview: {
		marginLeft: '20px',
		fontStyle: 'italic',
	},
	previewBox: {
		background: '#efb6b2',
		height: 350,
		width: 350,
		borderRadius: 16,
		opacity: 0.3,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	previewIcon: {
		fontSize: 70,
		opacity: 0.5,
	},
	previewPic: {
		maxHeight: 350,
		opacity: 1,
		borderRadius: 16,
	},
}));
