const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const S3 = require("react-aws-s3")
const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS,
  secretAccessKey: process.env.REACT_APP_SECRET,
  S3_BASE_URL:process.env.S3_BASE_URL
} 


async function create(req, res) {
  try {
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
    res.json(token);
  } catch (error) {
    res.status(400).json("Bad Credentials");
  }
}


async function updateUser(req,res) {
  try {
    console.log (req.body)
    const user = await User.findOneAndUpdate({ email: req.body.email }, req.body);
    if (!user) throw new Error();
  } catch (error) {
    console.log ("error in update")
  }

  if (req.body.profilePicture) 
    console.log (`uploading image ${req.body.profilePicture} start `)
    try {
      const ReactS3Client = new S3(config)    
      let newFileName = file.name.replace(/\..+$/, "");
      ReactS3Client.uploadFile(req.files.file, newFileName) 
      console.log (`uploading image ${req.body.profilePicture} finished `)
      // res.status(200).json(result);    
    }    
    catch(error) {
      return res.status(400).json(error); 
    }
}

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
