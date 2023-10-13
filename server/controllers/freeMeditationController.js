const { validate } = require("../middlewares/validation");
const sendEmail = require("../utils/sendEmail");

const freeMeditationController = [
  validate,
  async (req, res) => {
    try {
      const { email } = req.body;

      const emailOptions = {
        to: email,
        subject: "Enjoy your free meditaion session!",
        attachments: [
          {
            filename: "free meditation session.m4a",
            path: `https://res.cloudinary.com/ddxnx4smp/video/upload/v1697180906/iosyyq0izgsr3scxzaqp.m4a`,
          },
        ],
      };

      await sendEmail(emailOptions);

      res
        .status(200)
        .send(
          "Hooray! Please check your email, and enjoy your free meditation session!"
        );
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

module.exports = freeMeditationController;
