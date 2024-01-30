const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {
  homePage,
  aboutPage,
  contactPage,
  sendE_Mail,
} = require("./services/services");
const app = express();

// parsing data coming in requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// configure template engine
app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "jade");

// routing
app.get("/", homePage);

app.get("/about", aboutPage);

app.get("/contact", contactPage);

app.post("/contact/send", sendE_Mail);

// server

app.listen(3500, (req, res) => {
  console.log("Server running on port 3500");
});
