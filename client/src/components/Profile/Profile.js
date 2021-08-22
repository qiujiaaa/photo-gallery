import React, { useEffect, useState } from 'react';
import {
	Box,
	Typography,
	Grid,
	Paper,
	Avatar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	DialogActions,
	Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { useStyles } from './styles';
import { getUser, logout } from '../../actions/user';
import { getPosts } from '../../actions/posts';
import { USER_NOT_FOUND } from '../../constants/error';
import { useParams, useHistory } from 'react-router-dom';

const Profile = () => {
	const { id } = useParams();

	const history = useHistory();
	const dispatch = useDispatch();

	const [fetched, setFetched] = useState(false);
	const [openConfirmLogout, setOpenConfirmLogout] = useState(false);

	const classes = useStyles();

	let user = useSelector((state) => state.auth.user);
	let viewedUser = useSelector((state) => state.user);
	let posts = useSelector((state) => state.posts);
	posts = posts
		.filter((x) => x.authorId === id)
		.sort((x, y) => (x.createdAt > y.createdAt ? 1 : -1));
	let likes = 0;
	posts.forEach((post) => {
		likes += post.likes;
	});

	useEffect(() => {
		dispatch(getUser(id));
		dispatch(getPosts());
		setFetched(true);
		if (fetched && !viewedUser) {
			history.push(`/error/${USER_NOT_FOUND}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleLogout = () => {
		dispatch(logout());
		history.replace('/login');
	};

	const handleOpenConfirmLogout = () => {
		setOpenConfirmLogout(true);
	};

	const handleCloseConfirmLogout = () => {
		setOpenConfirmLogout(false);
	};

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
											<Box fontSize={22}>{likes}</Box>
										</Typography>
										<Typography className={classes.label}>
											<Box fontSize={12}>likes</Box>
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						</Paper>
						<Grid container item>
							<List
								className={classes.functions}
								component="nav"
								aria-label="functions"
							>
								<ListItem button className={classes.likes}>
									<ListItemIcon>
										<FavoriteIcon
											className={classes.likeicon}
										/>
									</ListItemIcon>
									<ListItemText primary="Likes" />
								</ListItem>
								<Divider />
								<ListItem button className={classes.bookmarks}>
									<ListItemIcon>
										<BookmarkIcon
											className={classes.bookmarkicon}
										/>
									</ListItemIcon>
									<ListItemText primary="Bookmarks" />
								</ListItem>
								<Divider />
								{user._id === viewedUser._id && (
									<ListItem
										onClick={handleOpenConfirmLogout}
										button
										className={classes.logout}
									>
										<ListItemIcon>
											<ExitToAppIcon
												className={classes.logouticon}
											/>
										</ListItemIcon>
										<ListItemText primary="Logout" />
									</ListItem>
								)}

								<Dialog
									open={openConfirmLogout}
									onClose={handleCloseConfirmLogout}
									aria-labelledby="alert-dialog-title"
									aria-describedby="alert-dialog-description"
								>
									<DialogTitle id="alert-dialog-title">
										{'Do you want to logout?'}
									</DialogTitle>
									<DialogContent>
										<DialogContentText id="alert-dialog-description">
											Once you log out, you will have to
											sign in via Google Authentication in
											future.
										</DialogContentText>
									</DialogContent>
									<DialogActions>
										<Button
											onClick={handleLogout}
											color="primary"
										>
											Logout
										</Button>
										<Button
											onClick={handleCloseConfirmLogout}
											color="primary"
											autoFocus
										>
											Cancel
										</Button>
									</DialogActions>
								</Dialog>
							</List>
						</Grid>
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
