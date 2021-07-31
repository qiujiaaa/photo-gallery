var jwt = require('jsonwebtoken');

const createToken = function (auth) {
	return jwt.sign(
		{
			id: auth.id,
		},
		'my-secret',
		{
			expiresIn: 60 * 120,
		}
	);
};

module.exports = {
	generateToken: function (req, res, next) {
		req.token = createToken(req.auth);
		return next();
	},
	sendToken: function (req, res) {
		console.log(req.token);
		res.cookie('jwt_token', req.token, {
			expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // expires after a day
			secure: true,
			httpOnly: true,
		});
		//res.setHeader('x-auth-token', req.token);
		return res.status(200).send(JSON.stringify(req.user));
	},
};
