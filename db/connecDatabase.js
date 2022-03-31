const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewurlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb is conectit with server${data.connection.host}`);
    });
};

module.exports = connectDatabase;