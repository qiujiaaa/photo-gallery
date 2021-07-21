import React from 'react';
import { Typography, Container } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { useStyles } from './styles';

const Error = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<ErrorOutlineIcon className={classes.icon} />
			<Typography variant="h4" className={classes.title}>
				Error, page cannot be found.
			</Typography>
		</Container>
	);
};

export default Error;
