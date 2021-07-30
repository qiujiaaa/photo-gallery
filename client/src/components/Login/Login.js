import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';

import config from './../../config.json';

const Login = () => {
	const [auth, setAuth] = useState(false);
	const [token, setToken] = useState('');
	const [user, setUser] = useState(null);

	const handleFailure = (error) => {
		alert(error);
	};

	const handleSuccess = (response) => {
		const options = {
			method: 'POST',
			body: response.accessToken,
			mode: 'cors',
			cache: 'default',
		};
		fetch('http://localhost:5000/auth/google', options).then((r) => {
			const token = r.headers.get('x-auth-token');
			r.json().then((user) => {
				if (token) {
					setAuth(false);
					setToken(token);
					setUser(user);
				}
			});
		});
	};

	return (
		<div>
			<Button href="http://localhost:5000/auth/google">
				Login using Google
			</Button>
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
