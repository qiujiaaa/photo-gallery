import React from 'react';
import {
	AppBar,
	Typography,
	Toolbar,
	Button,
	Grid,
	IconButton,
	makeStyles,
	Box,
} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';

const useStyles = makeStyles((theme) => ({
	header: {
		background: 'transparent',
		color: '#efb6b2;',
		boxShadow: 'none',
	},
	logo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	name: {
		fontFamily: 'Noto Serif',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.header}>
			<Toolbar>
				<Grid justify="space-between" container spacing={24}>
					<Box className={classes.logo}>
						<IconButton
							size="large"
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
