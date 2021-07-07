const multer = require('multer');

// set up mutler
const storage = multer.diskStorage({
	destination: (req, file, done) => {
		done(null, 'uploads');
	},
	filename: (req, file, done) => {
		done(null, file.fieldname + '-' + Date.now());
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
