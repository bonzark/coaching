require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

var indexRouter = require("./routes/index");
var authRouter = require("./routes/authRoutes");
var sessionRouter = require("./routes/sessionRoutes");
var contactRouter = require("./routes/contactRoutes");
var coachRoutes = require("./routes/coachRoutes");
var userRoutes = require("./routes/userRoutes");
var paymentRoutes = require("./routes/paymentRoutes");
var webhookRoutes = require("./routes/webhookRoutes");

const connectDB = require("./db/connection");
const consumedSession = require("./utils/consumedSession");

var app = express();

//connect DB
connectDB();

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use("/webhook", webhookRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public/uploads/")));

app.use("/public", express.static("public"));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", userRoutes);
app.use("/sessions", sessionRouter);
app.use("/contact-us", contactRouter);
app.use("/coaches", coachRoutes);
app.use("/payment", paymentRoutes);

// app.use("/webhook", webhookRoutes);

setInterval(consumedSession, 3600000);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

cloudinary.config({
  cloud_name: "dnwy9adyc",
  api_key: "445762993667882",
  api_secret: "qa3bFZOkf83EZagNNdeXCVuDpyI",
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
