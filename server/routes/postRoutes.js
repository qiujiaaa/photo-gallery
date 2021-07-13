const express = require('express');
const upload = require('../middleware/upload');

const router = express.Router();
const { getPosts, addPost } = require('../controllers/postController');

router.get('/', getPosts);
router.post('/', upload.single('file'), addPost);

module.exports = router;
