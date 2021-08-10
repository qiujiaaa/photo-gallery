import React from 'react';
import { Button, TextField, Grid, Box, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useStyles } from './styles';
import { useParams, useHistory } from 'react-router-dom';

const User = () => {
	const { id } = useParams();
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4}>
					<Grid container item className={classes.profile}>
						<Avatar></Avatar>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default User;
