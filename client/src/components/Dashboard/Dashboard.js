import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';

import Post from './GridPost/GridPost';
import { getPosts } from '../../actions/posts';
import { useStyles } from './styles';

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	const posts = useSelector((state) => state.posts);
	console.log(posts);

	const classes = useStyles();

	const history = useHistory();
	const handleAdd = () => {
		history.push('/add');
	};

	return (
		<div className={classes.root}>
			<Grid className={classes.grid} container spacing={3}>
				{posts &&
					posts.map((post) => {
						return (
							<Grid key={post._id} item xs={12} md={4}>
								<Box className={classes.item}>
									<Post post={post} />
								</Box>
							</Grid>
						);
					})}
			</Grid>

			<Fab
				onClick={() => handleAdd()}
				className={classes.fab}
				variant="extended"
			>
				<AddIcon />
				Add Post
			</Fab>
		</div>
	);
};

export default Dashboard;
