import axios from 'axios';

const posts = 'https://capturee.herokuapp.com/api/post';
const auth = 'https://capturee.herokuapp.com/auth';
const images = 'https://capturee.herokuapp.com/api/post/image';
const users = 'https://capturee.herokuapp.com/api/user';

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
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const deletePost = async (id) => {
	try {
		await axios.delete(posts + '/' + id);
		return id;
	} catch (err) {
		console.log(err.message);
	}
};

export const likePost = async ({ postId, userId }) => {
	try {
		const res = await axios.put(
			posts + '/like/' + postId,
			{},
			{ params: { userId } }
		);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const unlikePost = async ({ postId, userId }) => {
	try {
		const res = await axios.put(
			posts + '/unlike/' + postId,
			{},
			{ params: { userId } }
		);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const savePost = async ({ postId, userId }) => {
	try {
		const res = await axios.put(
			posts + '/save/' + postId,
			{},
			{ params: { userId } }
		);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const unsavePost = async ({ postId, userId }) => {
	try {
		const res = await axios.put(
			posts + '/unsave/' + postId,
			{},
			{ params: { userId } }
		);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const editPost = async ({ id, title, caption }) => {
	try {
		const res = await axios.put(
			posts + '/edit/' + id,
			{},
			{
				params: {
					title,
					caption,
				},
			}
		);
		return res.data;
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
			'https://capturee.herokuapp.com/auth/google',
			options
		);
		const user = await response.json();
		return user;
	} catch (err) {
		console.log(err.message);
	}
};

export const checkAuth = async () => {
	try {
		const res = await axios.get(auth + '/check');
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const logout = async () => {
	try {
		const res = await axios.get(auth + '/logout');
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};

export const getUser = async (id) => {
	try {
		const res = await axios.get(users + '/' + id);
		return res.data;
	} catch (err) {
		console.log(err.message);
	}
};
