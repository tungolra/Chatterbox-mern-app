const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
// import boto3 from "boto3";
S3_BUCKET = 'gacatcollectordjango'
S3_BASE_URL = 'https://s3.us-east-1.amazonaws.com/'
const REGION = "ca-central-1"

// Source: https://javascript.plainenglish.io/how-to-upload-files-to-aws-s3-in-react-591e533d615e
// const myBucket = new AWS.S3({
//   params: { Bucket: S3_BUCKET},
//   region: REGION,
// })

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

  photo_file = request.FILES.get('photo-file', None)
  if (req.body.profilePicture)
    console.log (`uploading image {req.body.profilePicture} start `)
    try {
      s3.upload_fileobj(photo_file, BUCKET, key)
      

      
      photo.save()
    }
      
    catch {
      return res.status(400).json(err); 
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
