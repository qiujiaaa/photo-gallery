const reducer = (auth = { isAuth: false, user: {} }, action) => {
	switch (action.type) {
		case 'AUTH':
			return {
				user: action.payload.user,
				isAuth: true,
			};
		default:
			return auth;
	}
};

export default reducer;
