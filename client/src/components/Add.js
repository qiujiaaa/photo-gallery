import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Button,
	TextField,
	Grid,
	Box,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { createPost } from '../actions/posts';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '150px',
		marginRight: '150px',
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
		paddingTop: 3,
		height: 250,
		flexGrow: 1,
	},
	preview: {
		marginLeft: '20px',
		background: '#efb6b2',
		height: 350,
		width: 350,
		borderRadius: 16,
		opacity: 0.3,
	},
}));

const Add = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [caption, setCaption] = useState('');
	const [file, setFile] = useState(null);
	const [error, setError] = useState('');

	const history = useHistory();

	const fileChangeHandler = (e) => {
		const types = ['image/png', 'image/jpeg'];

		let selected = e.target.files[0]; //grab the first file

		if (selected && types.includes(selected.type)) {
			// true if file exists
			setFile(selected);
			setError('');
		} else {
			setFile(null);
			setError('Please select an image file (png or jpeg)');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost({ title, caption, file }));

		setTitle('');
		setCaption('');
		setFile(null);
		history.push('/');
	};

	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={4}>
					<Grid item xs={12} md={5}>
						<Grid
							container
							item
							className={classes.form}
							spacing={2}
						>
							<Grid container item>
								<TextField
									label="Title"
									variant="outlined"
									required
									onChange={(e) => setTitle(e.target.value)}
								/>
							</Grid>
							<Grid container item>
								<TextField
									fullWidth={true}
									multiline
									InputProps={{
										className: classes.caption,
									}}
									label="Caption"
									variant="outlined"
									onChange={(e) => setCaption(e.target.value)}
								/>
							</Grid>
							<Grid container item>
								<input
									type="file"
									onChange={fileChangeHandler}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid>
							<Box className={classes.preview} />
						</Grid>
					</Grid>
				</Grid>
				<Grid container className={classes.misc} spacing={3}>
					<Grid item>
						<Button variant="outlined" type="submit">
							Add
						</Button>
					</Grid>
					<Grid item>
						<Typography color="error">{error}</Typography>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default Add;
