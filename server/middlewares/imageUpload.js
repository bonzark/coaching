const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    console.log("file :::", file);
    return cb(null, `${file.originalname}`);
  },
});
const upload = multer({
  storage,
});

module.exports = upload;
