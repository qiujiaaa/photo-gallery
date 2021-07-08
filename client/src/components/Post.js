import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	makeStyles,
	IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import cat from './cat.jpg';

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 345,
		display: 'inline-block',
	},
	cardmedia: {
		height: 200,
	},
	actions: {
		justify: 'space-between',
	},
}));

const Post = () => {
	const classes = useStyles();

	return (
		<Card variant="raised" className={classes.card}>
			<CardMedia
				className={classes.cardmedia}
				image={cat}
				title="Cat"
				component="img"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Cat
				</Typography>
				<Typography variant="body2">
					Lizards are a widespread group of squamate reptiles, with
					over 6,000 species, ranging across all continents except
					Antarctica
				</Typography>
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
