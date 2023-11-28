const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get All contacts
//@route Get /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Get contact
//@route Get /api/contacts
//@access private
const getContact = asyncHandler(async (req, res) => {
  id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json(contact);
});
//@desc create a new contacts
//@route Get /api/contacts
//@access private
const CreateContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory ..!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});
//@desc Update a new contacts
//@route Get /api/contacts
//@access private
const UpdateContact = asyncHandler(async (req, res) => {
  const contact = Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Not Found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User Don't have permission to update user contacts");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});

//@desc Delete contacts
//@route Get /api/contacts
//@access private
const DeleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Not Found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User Don't have permission to update user contacts");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  getContacts,
  UpdateContact,
  DeleteContact,
  CreateContact,
};
