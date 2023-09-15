const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { validate } = require('../middlewares/validation');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

const authController = {
  register: [
    validate,
    async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const verificationToken = crypto.randomBytes(20).toString('hex');

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
          name,
          email,
          password: hashedPassword,
          isVerified: false,
          verificationToken,
        });

        await newUser.save();
        const verificationLink = `${process.env.BASE_URL}/auth/verify/${verificationToken}`;
        const emailOptions = {
          to: email,
          subject: 'Email Verification',
          text: `Click the following link to verify your email: ${verificationLink}`,
        };

        await sendEmail(emailOptions);

        res.status(201).send('Verification email sent.');
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
      }
    },
  ],
  login: [
    validate,
    async (req, res) => {
      try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Successful login
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });

        // Successful login
        res.status(200).json({ message: 'Login successful', user, token });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
    },
  ],
  verify: [
    async (req, res) => {
      const { token } = req.params;

      const user = await User.findOne({ verificationToken: token });

      if (user) {
        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();
        res.redirect(process.env.HOST_URL);
      } else {
        res.send('Invalid token.');
      }
    },
  ],
  requestPasswordReset: [
    validate,
    async (req, res) => {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      // Generate a reset token
      const resetToken = crypto.randomBytes(20).toString('hex');

      // Update user's resetToken in the database
      user.resetToken = resetToken;
      await user.save();

      const emailOptions = {
        to: email,
        subject: 'Password Reset Request',
        text: `Click the following link to reset your password: ${process.env.BASE_URL}/auth/reset-password/${resetToken}`,
      };

      await sendEmail(emailOptions);

      res.status(200).json({ message: 'Password reset email sent' });
    },
  ],
  resetPassword: [
    validate,
    async (req, res) => {
      const { token } = req.params;
      const { password } = req.body;

      // Find user by token and reset password
      const user = await User.findOne({ resetToken: token });

      if (!user) {
        return res.status(400).json({ message: 'Invalid token' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.resetToken = undefined;
      await user.save();

      res.status(200).json({ message: 'Password reset successful' });
    },
  ],
};

module.exports = authController;
