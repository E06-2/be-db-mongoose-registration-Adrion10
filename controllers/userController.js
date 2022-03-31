const User = require('../models/userModels');

exports.createUser = async (req, res, next) => {
	const { name, email, password } = req.body;
	const user = await User.create({
		name,
		email,
		password
	});

	res.status(201).json({
		status: 'success',
		user
	});
};
