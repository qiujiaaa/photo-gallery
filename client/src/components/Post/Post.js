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
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import { getPost, deletePost } from '../../actions/posts';
import { POST_NOT_FOUND } from '../../constants/error';
import { formatDate } from '../../utils/dateUtil';

const Post = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const [fetched, setFetched] = useState(false);

	let posts = useSelector((state) => state.posts);
	let post = posts.find((x) => x._id === id);

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

	const handleShare = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		dispatch(deletePost(post._id));
		setAnchorEl(null);
		history.replace('/dashboard');
	};

	const handleEdit = () => {
		setAnchorEl(null);
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
									>
										<FavoriteIcon />
									</IconButton>
									<IconButton
										className={classes.save}
										aria-label="save"
									>
										<BookmarkIcon />
									</IconButton>
									<IconButton
										aria-controls="fade-menu"
										aria-haspopup="true"
										onClick={handleClick}
										className={classes.more}
									>
										<MoreVertIcon />
									</IconButton>
									<Menu
										id="fade-menu"
										anchorEl={anchorEl}
										keepMounted
										open={open}
										onClose={handleClose}
										TransitionComponent={Fade}
									>
										<MenuItem onClick={handleShare}>
											<ShareIcon
												className={classes.list}
											/>
											Share
										</MenuItem>
										<MenuItem onClick={handleEdit}>
											<EditIcon
												className={classes.list}
											/>
											Edit
										</MenuItem>
										<MenuItem onClick={handleDelete}>
											<DeleteIcon
												className={classes.list}
											/>
											Delete
										</MenuItem>
									</Menu>
								</Grid>
							</Paper>
						</Grid>
						<Grid container>
							<Paper
								variant="outlined"
								elevation={1}
								className={classes.profile}
							>
								<Avatar
									variant="rounded"
									src={`/api/user/displaypic/${post.userId}`}
								></Avatar>
								<Typography
									component="div"
									className={classes.username}
								>
									<Box fontWeight={500} m={1}>
										{post.name}
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
								<Typography>{post.caption}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default Post;
