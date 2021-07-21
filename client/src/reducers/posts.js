const reducer = (posts = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...posts, action.payload];
		case 'UPDATE':
			if (posts.some((x) => x._id === action.payload._id)) {
				console.log('exists');
				return posts.map((post) =>
					post._id === action.payload._id ? action.payload : post
				);
			} else {
				console.log('not exists');

				return [...posts, action.payload];
			}
		default:
			return posts;
	}
};

export default reducer;
