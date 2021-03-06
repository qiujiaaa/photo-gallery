const multer = require('multer');
const util = require('util');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
	url: process.env.MONGO_URI,
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	file: (req, file) => {
		const match = ['image/png', 'image/jpeg'];
		if (match.indexOf(file.mimetype) === -1) {
			//const filename = `${Date.now()}-${file.originalname}`;
			//return filename;
			return null;
		}
		return {
			bucketName: 'photos',
			filename: `${Date.now()}-${file.originalname}`,
		};
	},
});

const uploadFile = multer({ storage: storage }).single('file');
const uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;
