import React from 'react';
import { useSelector } from 'react-redux';
import {
	AppBar,
	Typography,
	Toolbar,
	Button,
	Grid,
	IconButton,
	Box,
} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles';

const Header = () => {
	const classes = useStyles();

	// const { user } = useSelector((state) => state.auth);
	// console.log('HEADER ', user);

	const history = useHistory();
	const handleClick = () => {
		if (history.location.pathname !== '/') {
			history.push('/dashboard');
		}
	};

	return (
		<AppBar position="static" className={classes.header}>
			<Toolbar>
				<Grid justifyContent="space-between" container spacing={1}>
					<Box className={classes.logo}>
						<IconButton
							size="medium"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => handleClick()}
						>
							<CameraIcon />
							<Typography
								variant="h6"
								component="div"
								className={classes.name}
							>
								Capture!
							</Typography>
						</IconButton>
					</Box>
					<Box className={classes.logo}>
						<Button>Login</Button>
						<Button>Home</Button>
					</Box>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
