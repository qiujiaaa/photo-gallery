import React from 'react';
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

import { useStyles } from './styles';

const Header = () => {
	const classes = useStyles();

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
						>
							<CameraIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							className={classes.name}
						>
							Capture!
						</Typography>
					</Box>
					<Box>
						<Button>Login</Button>
						<Button>Home</Button>
					</Box>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
