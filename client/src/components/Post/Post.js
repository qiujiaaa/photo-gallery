import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import { getPost } from '../../actions/posts';
import { POST_NOT_FOUND } from '../../constants/error';

const Post = () => {
	const { id } = useParams();
	const history = useHistory();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPost(id));
	}, [id, dispatch]);

	let posts = useSelector((state) => state.posts);
	let post = posts.find((x) => x._id === id);

	if (!post) {
		history.add(`/error/${POST_NOT_FOUND}`);
	}

	const classes = useStyles();

	return (
		<div className={classes.root}>
			{post && (
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Grid>
							<img
								className={classes.image}
								src={`/api/post/image/${post.img}`}
								alt="error"
							/>
						</Grid>
					</Grid>
					<Grid container item>
						<Grid>Hello</Grid>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default Post;
