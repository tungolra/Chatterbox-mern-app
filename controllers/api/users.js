const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    console.log(req.body)
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("User not found");
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
<<<<<<< HEAD
    // timer for when user automatically logs out
=======
    console.log(match);
>>>>>>> main
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

//keep, but doesn't do anything...
function checkToken(req, res) {
  console.log("req.user -->", req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  checkToken,
};

//Helper Functions

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}
