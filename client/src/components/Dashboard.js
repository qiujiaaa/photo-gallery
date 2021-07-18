import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box, makeStyles } from '@material-ui/core';

import Post from './Post';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: '80px',
		marginRight: '80px',
		marginTop: '50px',
		marginBottom: '50px',
	},
	grid: {
		alignItems: 'center',
		justify: 'center',
	},
	item: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

const Dashboard = () => {
	const posts = useSelector((state) => state.posts);
	console.log(posts);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid className={classes.grid} container spacing={3}>
				{posts &&
					posts.map((post) => {
						return (
							<Grid item xs={12} md={4}>
								<Box className={classes.item}>
									<Post post={post} />
								</Box>
							</Grid>
						);
					})}
			</Grid>
		</div>
	);
};

export default Dashboard;
