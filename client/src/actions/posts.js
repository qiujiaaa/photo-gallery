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
		const user = await api.getUser(data.authorId);
		dispatch({
			type: 'GET_USER',
			payload: user,
		});
	} catch (err) {
		console.log(err.message);
	}
};

export const createPost =
	({ title, caption, file, user }) =>
	async (dispatch) => {
		try {
			// first add image
			const formData = new FormData();
			formData.append('file', file);
			const data = await api.createImage(formData);
			const img = data.data;
			const { displayName: author, _id: authorId } = user;
			const likes = [];
			const bookmarks = [];
			const post = await api.createPost({
				title,
				caption,
				img,
				author,
				authorId,
				likes,
				bookmarks,
			});
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

export const likePost =
	({ postId, userId }) =>
	async (dispatch) => {
		try {
			const post = await api.likePost({ postId, userId });
			dispatch({
				type: 'UPDATE_POST',
				payload: post,
			});
		} catch (err) {
			console.log(err);
		}
	};

export const unlikePost =
	({ postId, userId }) =>
	async (dispatch) => {
		try {
			const post = await api.unlikePost({ postId, userId });
			dispatch({
				type: 'UPDATE_POST',
				payload: post,
			});
		} catch (err) {
			console.log(err);
		}
	};

export const savePost =
	({ postId, userId }) =>
	async (dispatch) => {
		try {
			const post = await api.savePost({ postId, userId });
			dispatch({
				type: 'UPDATE_POST',
				payload: post,
			});
		} catch (err) {
			console.log(err);
		}
	};

export const unsavePost =
	({ postId, userId }) =>
	async (dispatch) => {
		try {
			const post = await api.unsavePost({ postId, userId });
			dispatch({
				type: 'UPDATE_POST',
				payload: post,
			});
		} catch (err) {
			console.log(err);
		}
	};

export const editPost =
	({ id, title, caption }) =>
	async (dispatch) => {
		try {
			const post = await api.editPost({ id, title, caption });
			dispatch({
				type: 'UPDATE_POST',
				payload: post,
			});
		} catch (err) {
			console.log(err);
		}
	};
