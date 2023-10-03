const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({
  dest: "uploads/",
  storage,
});

module.exports = upload;
