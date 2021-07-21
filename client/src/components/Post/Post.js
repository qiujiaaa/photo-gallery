import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useStyles } from './styles';
import { getPost } from '../../actions/posts';

const Post = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	const classes = useStyles();

	useEffect(() => {
		dispatch(getPost(id));
	}, [id, dispatch]);

	const posts = useSelector((state) => state.posts);
	console.log(posts);

	return <div>post</div>;
};

export default Post;
