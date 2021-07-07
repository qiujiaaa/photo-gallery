const redirectDashboard = (req, res) => {
	res.redirect(301, '/dashboard');
};

const getPosts = (req, res) => {
	res.send('all posts');
};

module.exports = { redirectDashboard, getPosts };
