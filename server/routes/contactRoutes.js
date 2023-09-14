const express = require("express");
const { validateContact } = require("../middlewares/validation");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.post("/", validateContact, contactController);

module.exports = router;
