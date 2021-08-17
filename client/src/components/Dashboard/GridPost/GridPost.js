import React, { useState } from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './styles';
import { previewCaption } from '../../../utils/captionUtil';
import { likePost, unlikePost } from '../../../actions/posts';

const Post = ({ post }) => {
	const { title, caption } = post;

	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	let user = useSelector((state) => state.auth.user);
	const [liked, setLiked] = useState(user.likes.indexOf(post._id) >= 0);

	const goIndividual = () => {
		history.push(`/post/${post._id}`);
	};

	const goUser = () => {
		history.push(`/user/${post.authorId}`);
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

	return (
		<Card variant="elevation" className={classes.card}>
			<CardMedia
				className={classes.cardmedia}
				image={`/api/post/image/${post.img}`}
				title={title}
				component="img"
				onClick={() => goIndividual()}
			/>
			<CardContent onClick={() => goIndividual()}>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2">
					{previewCaption(caption)}
				</Typography>
			</CardContent>
			<CardActions className={classes.actions}>
				<Button
					className={classes.user}
					onClick={() => goUser()}
					size="small"
				>
					{post.author}
				</Button>
				<IconButton
					onClick={() => handleLike()}
					aria-label="add to favorites"
				>
					<Typography>{post.likes}</Typography>
					<FavoriteIcon
						className={liked ? classes.unlike : classes.like}
					/>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
