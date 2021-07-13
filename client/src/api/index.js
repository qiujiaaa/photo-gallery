import axios from 'axios';

const posts = 'http://localhost:5000/api/post';
const users = 'http://localhost:5000/api/user';

export const fetchPosts = () => axios.get(posts);

export const createPost = async (newPost) => {
	try {
		const res = await axios.post(posts, newPost);
		console.log(res);
	} catch (err) {
		console.log(err.message);
	}
};
