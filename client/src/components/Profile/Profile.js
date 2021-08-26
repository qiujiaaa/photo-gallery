import React, { useEffect, useState } from 'react';
import {
	Box,
	Typography,
	Grid,
	Paper,
	Avatar,
	ListItemText,
	Divider,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	DialogActions,
	Button,
	Tab,
	Tabs,
	IconButton,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NoteIcon from '@material-ui/icons/Note';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useParams, useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import { getUser, logout } from '../../actions/user';
import { getPosts } from '../../actions/posts';
import { USER_NOT_FOUND } from '../../constants/error';

const Profile = () => {
	const { id } = useParams();

	const history = useHistory();
	const dispatch = useDispatch();

	const [fetched, setFetched] = useState(false);
	const [value, setValue] = useState(0);
	const [openConfirmLogout, setOpenConfirmLogout] = useState(false);

	const classes = useStyles();

	let user = useSelector((state) => state.auth.user);
	let viewedUser = useSelector((state) => state.user);
	let allposts = useSelector((state) => state.posts);

	let posts = allposts
		.filter((x) => x.authorId === id)
		.sort((x, y) => (x.createdAt > y.createdAt ? 1 : -1));

	let likes = 0;
	posts.forEach((post) => {
		likes += post.likes.length;
	});

	let likedPosts = allposts
		.filter((x) => x.likes.indexOf(viewedUser._id) >= 0)
		.sort((x, y) => (x.createdAt > y.createdAt ? 1 : -1));

	let bookmarkedPosts = allposts
		.filter((x) => x.bookmarks.indexOf(viewedUser._id) >= 0)
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

	const goToPost = (id) => {
		history.push(`/post/${id}`);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
		console.log(newValue);
	};

	const a11yProps = (index) => {
		return {
			id: `vertical-tab-${index}`,
			'aria-controls': `vertical-tabpanel-${index}`,
		};
	};

	const TabPanel = (props) => {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`full-width-tabpanel-${index}`}
				{...other}
			>
				{value === index && <Box p={3}>{children}</Box>}
			</div>
		);
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
							<Tabs
								orientation="vertical"
								variant="fullWidth"
								value={value}
								onChange={handleChange}
								aria-label="Vertical tabs example"
								className={classes.functions}
							>
								<Tab
									className={classes.likes}
									icon={
										<NoteIcon
											className={classes.likeicon}
										/>
									}
									label="Posts"
									{...a11yProps(0)}
								/>
								<Divider />
								<Tab
									className={classes.likes}
									icon={
										<FavoriteIcon
											className={classes.likeicon}
										/>
									}
									label="Liked"
									{...a11yProps(1)}
								/>
								<Divider />
								<Tab
									className={classes.bookmarks}
									icon={
										<BookmarkIcon
											className={classes.bookmarkicon}
										/>
									}
									label="Bookmarked"
									{...a11yProps(2)}
								/>
							</Tabs>
							{user._id === viewedUser._id && (
								<Grid
									onClick={handleOpenConfirmLogout}
									button
									className={classes.logout}
								>
									<IconButton>
										<ExitToAppIcon
											className={classes.logouticon}
										/>
									</IconButton>
									<ListItemText primary="Logout" />
								</Grid>
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
										Once you log out, you will have to sign
										in via Google Authentication in future.
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
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={8}>
					<TabPanel value={value} index={0}>
						<Grid className={classes.posts} container spacing={5}>
							{posts &&
								posts.map((post) => {
									return (
										<Grid key={post._id} item>
											<Box
												className={classes.item}
												onClick={() =>
													goToPost(post._id)
												}
											>
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
								<Typography>No posts available yet.</Typography>
							)}
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Grid className={classes.posts} container spacing={5}>
							{likedPosts &&
								likedPosts.map((post) => {
									return (
										<Grid key={post._id} item>
											<Box
												className={classes.item}
												onClick={() =>
													goToPost(post._id)
												}
											>
												<img
													className={classes.post}
													src={`/api/post/image/${post.img}`}
													alt="no input"
												/>
											</Box>
										</Grid>
									);
								})}
							{likedPosts.length === 0 && (
								<Typography>No liked posts yet.</Typography>
							)}
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<Grid className={classes.posts} container spacing={5}>
							{bookmarkedPosts &&
								bookmarkedPosts.map((post) => {
									return (
										<Grid key={post._id} item>
											<Box
												className={classes.item}
												onClick={() =>
													goToPost(post._id)
												}
											>
												<img
													className={classes.post}
													src={`/api/post/image/${post.img}`}
													alt="no input"
												/>
											</Box>
										</Grid>
									);
								})}
							{bookmarkedPosts.length === 0 && (
								<Typography>
									No bookmarked posts yet.
								</Typography>
							)}
						</Grid>
					</TabPanel>
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
