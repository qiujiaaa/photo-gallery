const GoogleTokenStrategy = require('passport-google-token').Strategy;
const User = require('../models/UserModel');

module.exports = function (passport) {
	passport.use(
		new GoogleTokenStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			},
			async function (accessToken, refreshToken, profile, done) {
				console.log(profile);
				const newUser = {
					googleId: profile.id,
					displayName: profile.displayName,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					image: profile.picture,
					token: accessToken,
				};
				try {
					let user = await User.findOne({ googleId: profile.id });
					if (user) {
						done(null, user);
					} else {
						user = await User.create(newUser);
						done(null, user);
					}
				} catch (err) {
					console.log(err);
				}
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => done(err, user));
	});
};
