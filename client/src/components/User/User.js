import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Box, Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './styles';
import { getUser } from '../../actions/user';
import { USER_NOT_FOUND } from '../../constants/error';
import { useParams, useHistory } from 'react-router-dom';

const User = () => {
	const { id } = useParams();

	const history = useHistory();
	const dispatch = useDispatch();

	const [fetched, setFetched] = useState(false);

	const classes = useStyles();

	let user = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUser(id));
		setFetched(true);
		if (fetched && !user) {
			history.push(`/error/${USER_NOT_FOUND}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4}>
					<Grid container item className={classes.profile}>
						<Avatar src={user.image}></Avatar>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default User;
