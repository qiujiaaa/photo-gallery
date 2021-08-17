const reducer = (posts = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...posts, action.payload];
		case 'UPDATE_POST':
			if (posts.some((x) => x._id === action.payload._id)) {
				return posts
					.sort((x, y) => (x.createdAt < y.createdAt ? 1 : -1))
					.map((post) =>
						post._id === action.payload._id ? action.payload : post
					);
			} else {
				return [...posts, action.payload];
			}
		case 'DELETE':
			return posts
				.sort((x, y) => (x.createdAt < y.createdAt ? 1 : -1))
				.filter((x) => x._id !== action.payload);
		default:
			return posts;
	}
};

export default reducer;
