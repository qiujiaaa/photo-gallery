import React from 'react';
import {
	AppBar,
	Typography,
	Toolbar,
	Button,
	Grid,
	IconButton,
	Box,
	Avatar,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import CameraIcon from '@material-ui/icons/Camera';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles';

const Header = () => {
	const classes = useStyles();

	const { user, isAuth } = useSelector((state) => state.auth);

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
					{isAuth && (
						<Box className={classes.logo}>
							<Avatar src={user.image}></Avatar>
							<Button>{user.displayName}</Button>
						</Box>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
