import axios from 'axios';

const posts = 'http://localhost:5000/api/post';
const images = 'http://localhost:5000/api/post/image';
const users = 'http://localhost:5000/api/user';

export const fetchPosts = () => axios.get(posts);

export const createImage = async (image) => {
	try {
		const res = await axios.post(images, image);
		return res;
	} catch (err) {
		console.log(err.message);
	}
};

export const createPost = async (post) => {
	try {
		const res = await axios.post(posts, post);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};
