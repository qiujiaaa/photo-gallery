import React from 'react';
import Post from './Post';
import { Grid, Box, makeStyles } from '@material-ui/core';

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
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<p>Hello from dashboard</p>
			<Grid className={classes.grid} container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.item}>
						<Post />
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.item}>
						<Post />
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.item}>
						<Post />
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Box className={classes.item}>
						<Post />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;
