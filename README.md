# CHATTER BOX

# USED TECHNOLOGIES
1. React
2. Mongoose database
3. socket io 
4. Amazon Web Services (aws-sdk)

# Steps to follow

1. Create the AWS S3 bucket as mentioned here
2. Create a .env file at the root of the repository and add the details in the following format

REACT_APP_BUCKET_NAME=your-bucket-name
REACT_APP_REGION=add the location of your bucket (eg: us-west-2)
REACT_APP_ACCESS=got-from-the-security-credentials
REACT_APP_SECRET=got-from-the-security-credentials
Run npm start to start the server on PORT 3000

# Installation
npm install
Upload F
npm i aws-sdk

# References
https://www.npmjs.com/package/react-upload-to-s3