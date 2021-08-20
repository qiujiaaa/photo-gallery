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
		dispatch({
			type: 'AUTH',
			payload: user,
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
