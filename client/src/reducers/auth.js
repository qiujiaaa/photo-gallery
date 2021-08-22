const reducer = (auth = { isAuth: false, user: {} }, action) => {
	switch (action.type) {
		case 'AUTH':
			return {
				user: action.payload,
				isAuth: true,
			};
		case 'UPDATE_USER':
			return {
				user: action.payload,
				isAuth: true,
			};
		case 'LOGOUT':
			return {
				isAuth: false,
				user: {},
			};
		default:
			return auth;
	}
};

export default reducer;
