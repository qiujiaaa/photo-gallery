import React from 'react';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import CameraIcon from '@material-ui/icons/Camera';

import { authUser } from '../../actions/user';
import { useStyles } from './styles';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();

	const handleFailure = (error) => {
		alert(error);
	};

	const handleSuccess = (response) => {
		dispatch(authUser(response.accessToken));
		history.replace('/dashboard');
	};

	return (
		<div className={classes.root}>
			<Grid container className={classes.container}>
				<Paper className={classes.paper}>
					<Grid item className={classes.icon}>
						<CameraIcon style={{ fontSize: 80 }} />
					</Grid>
					<Grid item className={classes.text}>
						<Typography>
							<Box fontWeight="fontWeightBold">
								Login with Google now!
							</Box>
						</Typography>
					</Grid>
					<Grid item className={classes.button}>
						<GoogleLogin
							clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
							buttonText="Login"
							onSuccess={handleSuccess}
							onFailure={handleFailure}
						/>
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
};

export default Login;
