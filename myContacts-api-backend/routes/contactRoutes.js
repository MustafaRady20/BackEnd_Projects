const express = require("express");

const router = express.Router();

const {
  getContact,
  getContacts,
  UpdateContact,
  DeleteContact,
  CreateContact,
} = require("../controllers/ContactControllers");
const ValidateToken = require("../middleware/validateTokenHandler");


router.use(ValidateToken)
router.route("/").get(getContacts).post(CreateContact);
router.route("/:id").get(getContact).delete(DeleteContact).put(UpdateContact);


module.exports = router;
