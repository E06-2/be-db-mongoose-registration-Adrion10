const express = require('express');

const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

const mongoose = require('mongoose');

const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

mongoose.connect(process.env.MONGODB_URL).then((res) => {
	console.log('mongoDB is running');
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server running on port at ${port}`);
});
