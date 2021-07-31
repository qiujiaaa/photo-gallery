import * as api from '../api';

export const authUser = (token) => async (dispatch) => {
	try {
		const { user, authToken } = await api.authUser(token);
		dispatch({
			type: 'AUTH',
			payload: { user, authToken },
		});
	} catch (err) {
		console.log(err);
	}
};
