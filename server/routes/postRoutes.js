const express = require('express');

const router = express.Router();
const {
	getPosts,
	getPost,
	addImage,
	addPost,
	getImage,
	deletePost,
	likePost,
} = require('../controllers/postController');

router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/image/:id', getImage);
router.post('/', addPost);
router.post('/image', addImage);
router.delete('/:id', deletePost);
router.put('/like/:id', likePost);

module.exports = router;
