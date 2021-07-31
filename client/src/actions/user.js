import * as api from '../api';

export const authUser = (token) => async (dispatch) => {
	try {
		// const { user, authToken } = await api.authUser(token);
		const user = await api.authUser(token);
		dispatch({
			type: 'AUTH',
			//payload: { user, authToken },
			payload: user,
		});
	} catch (err) {
		console.log(err);
	}
};
