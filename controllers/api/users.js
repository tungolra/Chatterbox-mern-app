const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    console.log(req.body);
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
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    // timer for when user automatically logs out
    const token = createJWT(user);
    console.log ("token")
    res.json(token);
  } catch (error) {
    res.status(400).json("Bad Credentials");
  }
}

async function updateUser(req,res) {
  try {
    const user = await User.findOneAndUpdate({ email: req.body.email }, req.body);
    console.log (req.body)
    if (!user) throw new Error();
  } catch (error) {
    console.log ("error in update")
  }
}

//keep, but doesn't do anything...
function checkToken(req, res) {
  console.log("req.user -->", req.user);
  res.json(req.exp);
}

//getUser
//getAllUsers

//Helper Functions

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

module.exports = {
  create,
  login,
  update:updateUser,
  checkToken,
};
