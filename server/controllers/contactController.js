const { validate } = require("../middlewares/validation");
const sendEmail = require("../utils/sendEmail");
const template = require("../templates/contactInfo");

const contactController = [
  validate,
  async (req, res) => {
    try {
      const { name, email, contactNo, message } = req.body;

      const emailOptions = {
        to: process.env.EMAIL_SERVICE_MAIL_ID,
        subject: "A new contact has arrived",
        html: template({ name, email, contactNo, message }),
      };

      await sendEmail(emailOptions);

      res.status(200).send("Yay! Your message was sent successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  },
];

module.exports = contactController;
