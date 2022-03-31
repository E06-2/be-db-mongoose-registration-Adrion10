const express = require('express');
const createUser = require('../controllers/userController');
const router = express.Router();

router.post('/register', async (req, res) => {
	try {
		const newUser = await createUser.createUser(req.body);

		res.status(200).json({
			status: true,
			newUser
		});
	} catch (error) {
		res.status(404).json({
			status: false,
			message: 'Error registering'
		});
	}
});

module.exports = router;
