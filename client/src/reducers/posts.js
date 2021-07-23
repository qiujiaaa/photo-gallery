const reducer = (posts = [], action) => {
	console.log(action.type);
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...posts, action.payload];
		case 'UPDATE':
			if (posts.some((x) => x._id === action.payload._id)) {
				return posts.map((post) =>
					post._id === action.payload._id ? action.payload : post
				);
			} else {
				return [...posts, action.payload];
			}
		case 'DELETE':
			return posts.filter((x) => x._id !== action.payload);
		default:
			return posts;
	}
};

export default reducer;
