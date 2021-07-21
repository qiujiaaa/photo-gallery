import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import { getPost } from '../../actions/posts';
import { POST_NOT_FOUND } from '../../constants/error';

const Post = () => {
	const { id } = useParams();
	const history = useHistory();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPost(id));
	}, [id, dispatch]);

	const posts = useSelector((state) => state.posts);
	const post = posts.find((x) => x._id === id);

	if (!post) {
		history.push(`/error/${POST_NOT_FOUND}`);
	}
	console.log(post);

	const classes = useStyles();

	return <div>post</div>;
};

export default Post;
