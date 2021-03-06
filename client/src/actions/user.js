import * as api from '../api';

export const authUser = (token) => async (dispatch) => {
	try {
		const user = await api.authUser(token);
		dispatch({
			type: 'AUTH',
			payload: user,
		});
	} catch (err) {
		console.log(err);
	}
};

export const checkAuth = () => async (dispatch) => {
	try {
		const user = await api.checkAuth();
		if (user) {
			dispatch({
				type: 'AUTH',
				payload: user,
			});
		}
	} catch (err) {
		console.log(err);
	}
};

export const logout = () => async (dispatch) => {
	try {
		await api.logout();
		dispatch({
			type: 'LOGOUT',
			payload: {},
		});
	} catch (err) {
		console.log(err);
	}
};

export const getUser = (id) => async (dispatch) => {
	try {
		const user = await api.getUser(id);
		dispatch({
			type: 'GET_USER',
			payload: user,
		});
	} catch (err) {
		console.log(err);
	}
};
