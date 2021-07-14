const express = require('express');

const router = express.Router();
const {
	getPosts,
	addImage,
	addPost,
} = require('../controllers/postController');

router.get('/', getPosts);
router.post('/', addPost);
router.post('/image', addImage);

module.exports = router;
