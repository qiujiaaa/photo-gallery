import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@material-ui/core';
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

	let viewedUser = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUser(id));
		setFetched(true);
		if (fetched && !viewedUser) {
			history.push(`/error/${USER_NOT_FOUND}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default User;
