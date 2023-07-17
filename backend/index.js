const express = require("express");
const cors = require("cors");
require("./db/Config");
const User = require("./db/User");

const path = require("path");

const Jwt = require("jsonwebtoken");
const jwtkey = "freecodecamp";

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./frontend/freecode/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, ".frontend/freecode/build/index.html"));
});

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtkey, { expiresIn: "7days" }, (err, token) => {
    if (err) {
      res.send({ result: "something went wrong" });
    }
    res.send({ result, auth: token });
  });
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtkey, { expiresIn: "7days" }, (err, token) => {
        if (err) {
          res.send({ result: "something went wrong" });
        }
        res.send({ user, auth: token });
      });
    } else {
      res.send({ result: "User Invalid" });
    }
  } else {
    res.send({ result: "User Invalid" });
  }
});

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];

    Jwt.verify(token, jwtkey, (err, success) => {
      if (err) {
        res
          .status(401)
          .send({ result: "Please provied valid token with header" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ result: "Please add token with header" });
  }
}

app.listen(5000);
