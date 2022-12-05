# MERN-Stack Infrastructure

Clone this repo to provide the starter code for a comprehensive MERN-Stack project including token-based authentication.

# Steps to follow

1. Create the AWS S3 bucket as mentioned here
2. Run npm install
3. The react-aws-s3 package, has been used to facilitate the file uploads to th S3 bucket
4. Run npm install

The react-aws-s3 package, has been used to facilitate the file uploads to th S3 bucket

Create a .env file at the root of the repository and add the details in the following format

REACT_APP_BUCKET_NAME=your-bucket-name
REACT_APP_REGION=add the location of your bucket (eg: us-west-2)
REACT_APP_ACCESS=got-from-the-security-credentials
REACT_APP_SECRET=got-from-the-security-credentials
Run npm start to start the server on PORT 3000