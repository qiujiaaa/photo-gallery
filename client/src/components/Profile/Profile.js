import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import Post from '../Dashboard/GridPost/GridPost';
import { useStyles } from './styles';
import { getUser } from '../../actions/user';
import { getPosts } from '../../actions/posts';
import { USER_NOT_FOUND } from '../../constants/error';
import { useParams, useHistory } from 'react-router-dom';

const Profile = () => {
	const { id } = useParams();

	const history = useHistory();
	const dispatch = useDispatch();

	const [fetched, setFetched] = useState(false);

	const classes = useStyles();

	let viewedUser = useSelector((state) => state.user);
	let posts = useSelector((state) => state.posts);
	posts = posts
		.filter((x) => x.authorId === id)
		.sort((x, y) => (x.createdAt > y.createdAt ? 1 : -1));

	useEffect(() => {
		dispatch(getUser(id));
		dispatch(getPosts());
		setFetched(true);
		if (fetched && !viewedUser) {
			history.push(`/error/${USER_NOT_FOUND}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4}>
					<Grid container item>
						<Paper className={classes.profile}>
							<Avatar
								className={classes.dp}
								src={viewedUser.image}
							></Avatar>
							<Typography className={classes.name}>
								<Box
									fontWeight="fontWeightBold"
									fontStyle="italic"
								>
									{viewedUser.displayName}
								</Box>
							</Typography>
							<Paper variant="outlined" className={classes.paper}>
								<Grid container item className={classes.stats}>
									<Grid item className={classes.stat}>
										<Typography className={classes.number}>
											<Box fontSize={22}>
												{posts.length}
											</Box>
										</Typography>
										<Typography className={classes.label}>
											<Box fontSize={12}>posts</Box>
										</Typography>
									</Grid>
									<Grid
										container
										item
										className={classes.line}
									></Grid>
									<Grid item className={classes.stat}>
										<Typography className={classes.number}>
											<Box fontSize={22}>90</Box>
										</Typography>
										<Typography className={classes.label}>
											<Box fontSize={12}>likes</Box>
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						</Paper>
					</Grid>
				</Grid>
				<Grid item xs={12} md={8}>
					<Grid className={classes.posts} container spacing={5}>
						{posts &&
							posts.map((post) => {
								return (
									<Grid key={post._id} item>
										<Box className={classes.item}>
											<img
												className={classes.post}
												src={`/api/post/image/${post.img}`}
												alt="no input"
											/>
										</Box>
									</Grid>
								);
							})}
						{posts.length === 0 && (
							<Typography>This user has no posts.</Typography>
						)}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
