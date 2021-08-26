import { useEffect, useState } from 'react';
import {
	Grid,
	Typography,
	Menu,
	MenuItem,
	Fade,
	IconButton,
	Paper,
	Avatar,
	Box,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	DialogActions,
	Button,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import {
	getPost,
	deletePost,
	likePost,
	unlikePost,
	savePost,
	unsavePost,
} from '../../actions/posts';
import { POST_NOT_FOUND } from '../../constants/error';
import { formatDate } from '../../utils/dateUtil';

const Post = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const [fetched, setFetched] = useState(false);
	const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

	let posts = useSelector((state) => state.posts);
	let post = posts.find((x) => x._id === id);
	let author = useSelector((state) => state.user);
	let user = useSelector((state) => state.auth.user);

	const [liked, setLiked] = useState(post.likes.indexOf(user._id) >= 0);
	const [saved, setSaved] = useState(post.bookmarks.indexOf(user._id) >= 0);

	useEffect(() => {
		dispatch(getPost(id));
		setFetched(true);
		if (fetched && !post) {
			history.push(`/error/${POST_NOT_FOUND}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		dispatch(deletePost(post._id));
		setAnchorEl(null);
		history.replace('/dashboard');
	};

	const handleLike = () => {
		if (!liked) {
			dispatch(likePost({ postId: post._id, userId: user._id }));
			setLiked(true);
		} else {
			dispatch(unlikePost({ postId: post._id, userId: user._id }));
			setLiked(false);
		}
	};

	const handleSave = () => {
		if (!saved) {
			dispatch(savePost({ postId: post._id, userId: user._id }));
			setSaved(true);
		} else {
			dispatch(unsavePost({ postId: post._id, userId: user._id }));
			setSaved(false);
		}
	};

	const handleEdit = () => {
		setAnchorEl(null);
		history.push(`/post/edit/${post._id}`);
	};

	const handleOpenConfirmDelete = () => {
		setOpenConfirmDelete(true);
	};

	const handleCloseConfirmDelete = () => {
		setOpenConfirmDelete(false);
	};

	const goUser = () => {
		history.push(`/user/${post.authorId}`);
	};

	return (
		<div className={classes.root}>
			{post && (
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Grid className={classes.media}>
							<img
								src={`/api/post/image/${post.img}`}
								alt="error"
							/>
							<Paper>
								<Grid container className={classes.actions}>
									<IconButton
										className={classes.like}
										aria-label="add to favorites"
										onClick={() => handleLike()}
									>
										<Typography>
											{post.likes.length}
										</Typography>
										<FavoriteIcon
											className={
												liked
													? classes.unlike
													: classes.like
											}
										/>
									</IconButton>

									<IconButton
										className={classes.save}
										aria-label="save"
										onClick={() => handleSave()}
									>
										<BookmarkIcon
											className={
												saved
													? classes.unsave
													: classes.save
											}
										/>
									</IconButton>

									{user._id === post.authorId && (
										<IconButton
											aria-controls="fade-menu"
											aria-haspopup="true"
											onClick={handleClick}
											className={classes.more}
										>
											<MoreVertIcon />
										</IconButton>
									)}

									<Menu
										id="fade-menu"
										anchorEl={anchorEl}
										keepMounted
										open={open}
										onClose={handleClose}
										TransitionComponent={Fade}
									>
										<MenuItem
											className={classes.list}
											onClick={handleEdit}
										>
											<EditIcon
												className={classes.listLabel}
											/>
											Edit
										</MenuItem>
										<MenuItem
											onClick={handleOpenConfirmDelete}
											className={classes.list}
										>
											<DeleteIcon
												className={classes.listLabel}
											/>
											Delete
										</MenuItem>
										<Dialog
											open={openConfirmDelete}
											onClose={handleCloseConfirmDelete}
											aria-labelledby="alert-dialog-title"
											aria-describedby="alert-dialog-description"
										>
											<DialogTitle id="alert-dialog-title">
												{
													'Do you want to delete this post?'
												}
											</DialogTitle>
											<DialogContent>
												<DialogContentText id="alert-dialog-description">
													Once this post is deleted,
													it can no longer be accessed
													and will be removed from
													your profile page.
												</DialogContentText>
											</DialogContent>
											<DialogActions>
												<Button
													onClick={handleDelete}
													color="primary"
												>
													Delete
												</Button>
												<Button
													onClick={
														handleCloseConfirmDelete
													}
													color="primary"
													autoFocus
												>
													Cancel
												</Button>
											</DialogActions>
										</Dialog>
									</Menu>
								</Grid>
							</Paper>
						</Grid>
						<Grid container>
							<Paper
								variant="outlined"
								elevation={1}
								className={classes.profile}
								onClick={() => goUser()}
							>
								<Avatar
									variant="rounded"
									src={author.image}
								></Avatar>
								<Typography
									component="div"
									className={classes.username}
								>
									<Box fontWeight={500} m={1}>
										{post.author}
									</Box>
								</Typography>
							</Paper>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6}>
						<Grid container className={classes.description}>
							<Typography className={classes.title} variant="h3">
								{post.title}
							</Typography>
							<Typography className={classes.date}>
								{formatDate(post.createdAt)}
							</Typography>
							<Grid container className={classes.line}></Grid>
							<Grid className={classes.caption} container>
								{post.caption.split('\n').map((str) => (
									<Typography>{str}</Typography>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default Post;
