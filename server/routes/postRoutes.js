const express = require('express');

const router = express.Router();
const {
	getPosts,
	addImage,
	addPost,
	getImage,
} = require('../controllers/postController');

router.get('/', getPosts);
router.get('/image/:id', getImage);
router.post('/', addPost);
router.post('/image', addImage);

module.exports = router;
