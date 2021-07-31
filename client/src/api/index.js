import axios from 'axios';

const posts = 'http://localhost:5000/api/post';
const images = 'http://localhost:5000/api/post/image';

axios.defaults.withCredentials = true;

export const fetchPosts = () => axios.get(posts);

export const fetchPost = async (id) => {
	try {
		const res = await axios.get(posts + '/' + id);
		return res;
	} catch (err) {
		console.log(err.message);
	}
};

export const fetchImage = async (image) => {
	try {
		const file = await axios.get(images + '/' + image);
		return file;
	} catch (err) {
		console.log(err.message);
	}
};

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
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const deletePost = async (id) => {
	try {
		const res = await axios.delete(posts + '/' + id);
		console.log(res.data);
		return id;
	} catch (err) {
		console.log(err.message);
	}
};

export const authUser = async (token) => {
	try {
		const tokenBlob = new Blob(
			[JSON.stringify({ access_token: token }, null, 2)],
			{ type: 'application/json' }
		);
		const options = {
			method: 'POST',
			body: tokenBlob,
			mode: 'cors',
			cache: 'default',
			credentials: 'include',
		};
		const response = await fetch(
			'http://localhost:5000/auth/google',
			options
		);
		const user = await response.json();
		return user;
	} catch (err) {
		console.log(err.message);
	}
};
