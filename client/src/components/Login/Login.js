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

	const handleSuccess = async (response) => {
		const tokenBlob = new Blob(
			[JSON.stringify({ access_token: response.accessToken }, null, 2)],
			{ type: 'application/json' }
		);
		const options = {
			method: 'POST',
			body: tokenBlob,
			mode: 'cors',
			cache: 'default',
		};
		fetch('http://localhost:5000/auth/google', options).then((r) => {
			const token = r.headers.get('x-auth-token');
			r.json().then((user) => {
				console.log(user);
				console.log(token);
				if (token) {
					setAuth(false);
					setToken(token);
					setUser(user);
				}
			});
			console.log(r);
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
