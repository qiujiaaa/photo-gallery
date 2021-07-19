import React from 'react';
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

import { useStyles } from './styles';

const Post = ({ post }) => {
	const { title, caption } = post;

	const classes = useStyles();

	return (
		<Card variant="elevation" className={classes.card}>
			<CardMedia
				className={classes.cardmedia}
				image={`/api/post/image/${post.img}`}
				title={title}
				component="img"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2">{caption}</Typography>
			</CardContent>
			<CardActions className={classes.actions}>
				<Button size="small">Author name</Button>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;