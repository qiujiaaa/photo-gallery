import React from 'react';
import { Button } from '@material-ui/core';

const Login = () => {
	return (
		<div>
			<Button href="http://localhost:5000/auth/google">
				Login using Google
			</Button>
		</div>
	);
};

export default Login;
