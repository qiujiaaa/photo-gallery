import * as api from '../api';

// Action Creators that returns an action
// because its async, use thunk syntax
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({
			type: 'FETCH_ALL',
			payload: data,
		});
		console.log(data);
	} catch (err) {
		console.log(err.message);
	}
};

export const getPost = (id) => async (dispatch) => {
	try {
		const { data } = await api.fetchPost(id);
		dispatch({
			type: 'UPDATE',
			payload: data,
		});
	} catch (err) {
		console.log(err.message);
	}
};

export const createPost =
	({ title, caption, file }) =>
	async (dispatch) => {
		try {
			// first add image
			const formData = new FormData();
			formData.append('file', file);
			const data = await api.createImage(formData);
			const img = data.data;
			const post = await api.createPost({ title, caption, img });
			dispatch({
				type: 'CREATE',
				payload: post,
			});
		} catch (err) {
			console.log(err);
		}
	};

export const deletePost = (id) => async (dispatch) => {
	try {
		const data = await api.deletePost(id);
		dispatch({
			type: 'DELETE',
			payload: data,
		});
	} catch (err) {
		console.log(err);
	}
};
