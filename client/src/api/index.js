import axios from 'axios';

const posts = 'http://localhost:5000/api/post';
const users = 'http://localhost:5000/api/user';

export const fetchPosts = () => axios.get(posts);

export const createPost = (newPost) => {
	axios.post(posts, newPost);
};
