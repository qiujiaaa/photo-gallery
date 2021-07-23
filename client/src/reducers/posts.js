const reducer = (posts = [], action) => {
	console.log(action.type);

	switch (action.type) {
		case 'FETCH_ALL':
			console.log(action.payload);
			return action.payload;
		case 'CREATE':
			console.log([...posts, action.payload]);
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
			console.log(posts.filter((x) => x._id !== action.payload));
			return posts.filter((x) => x._id !== action.payload);
		default:
			console.log(posts);
			return posts;
	}
};

export default reducer;
