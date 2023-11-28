const express = require("express");
const app = express();
//-------------------------------------------------
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection")

connectDB()
app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/user",require("./routes/userRouter"))
app.use(require("./middleware/errorHandler"));


// run the server 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server leisten on port ${port}..!`);
});
