const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const {BadRequestError} = require('../utils/apiError');
const {aws} = require('../config/config');
const s3 = new AWS.S3({
  accessKeyId: aws.accessKeyId,
  secretAccessKey: aws.secretAccessKey,
  region: aws.region,
  bucket: aws.bucket,
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
    return cb(new BadRequestError('Please upload an image file'));
  }
  cb(null, true);
};

const upload = multer({
  storage: multerS3({
    fileFilter,
    s3,
    bucket: aws.bucket,
    acl: 'public-read',
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = `${Date.now().toString()}${ext}`;
      cb(null, fileName);
    },
  }),
});

module.exports = upload;


