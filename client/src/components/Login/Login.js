import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import { authUser } from '../../actions/user';
import config from './../../config.json';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleFailure = (error) => {
		alert(error);
	};

	const handleSuccess = (response) => {
		dispatch(authUser(response.accessToken));
		history.replace('/dashboard');
	};

	return (
		<div>
			<GoogleLogin
				clientId={config.GOOGLE_CLIENT_ID}
				buttonText="Login"
				onSuccess={handleSuccess}
				onFailure={handleFailure}
			/>
		</div>
	);
};

export default Login;
