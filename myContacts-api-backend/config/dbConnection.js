const mongoos = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoos.connect(process.env.DB_URL);
    console.log(
      `Database connected: ${connect.Connection.host}, ${connect.Connection.name}`
    );
  } catch (err) {
    console.error(`Database connection faild ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
