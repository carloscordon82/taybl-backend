var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require("mongoose");

const cors = require("cors");

var app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN || "http://localhost:3000",
  })
);

const session = require("express-session");
const passport = require("passport");

require("./config/passport");
require("dotenv/config");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(
  session({
    secret: "some secret goes here",
    resave: true,
    saveUninitialized: false,
    sameSite: "none",
    maxAge: 60000000,
    secure: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let authRouter = require("./routes/auth");
let reservationsRouter = require("./routes/reservations");
let restaurantsRouter = require("./routes/restaurants");
let menusRouter = require("./routes/menus");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/reservations", reservationsRouter);
app.use("/restaurants", restaurantsRouter);

app.use("/menus", menusRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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

mongoose
  .connect(process.env.MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

module.exports = app;

/*

Routes

GET     /user/              returns the user and all reservations

POST    /auth/signup        signup
POST    /auth/login         login
PUT     /auth/update        update user info

POST    /reservations/      creates new reservation - parameters (userID, restaurantID, time, date, party, primoSeating)
GET     /reservations/:id   returns reservations details
PUT     /reservations/:id   updates current reservation
DELETE  /reservations/:id   deletes current reservation

GET   /restaurants/       returns restaurants - optional parameters (cuisine, seating options, price)
GET   /restaurants/:id    details of 1 restaurant

GET   /menus/:id             returns the menu, including items and pics


*/
