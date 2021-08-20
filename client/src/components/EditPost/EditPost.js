import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Grid, Box } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';

import { useStyles } from './styles';
import { getPost, editPost } from '../../actions/posts';
import { POST_NOT_FOUND } from '../../constants/error';

const EditPost = () => {
	const classes = useStyles();

	const { id } = useParams();
	const dispatch = useDispatch();

	let posts = useSelector((state) => state.posts);
	let post = posts.find((x) => x._id === id);

	const [title, setTitle] = useState(post.title);
	const [caption, setCaption] = useState(post.caption);
	const [fetched, setFetched] = useState(false);

	const history = useHistory();

	useEffect(() => {
		dispatch(getPost(id));
		setFetched(true);
		if (fetched && !post) {
			history.push(`/error/${POST_NOT_FOUND}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editPost({ id, title, caption }));
		history.push(`/post/${post._id}`);
	};

	const handleCancel = () => {
		history.push(`/post/${post._id}`);
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
									value={title}
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
									rows="15"
									margin="normal"
									label="Caption"
									variant="outlined"
									value={caption}
									onChange={(e) => setCaption(e.target.value)}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid>
							<Box className={classes.preview}>
								<img
									className={classes.previewPic}
									src={`/api/post/image/${post.img}`}
									alt="no input"
								/>
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Grid container className={classes.actions} spacing={3}>
					<Button
						className={classes.edit}
						variant="outlined"
						type="submit"
					>
						Edit
					</Button>
					<Button
						variant="outlined"
						type="submit"
						onClick={handleCancel}
					>
						Cancel
					</Button>
				</Grid>
			</form>
		</div>
	);
};

export default EditPost;
