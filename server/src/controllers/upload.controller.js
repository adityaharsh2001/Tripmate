const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const {uploadService} = require('../services');

const uploadImage = catchAsync(async (req, res) => {
  const image = await uploadService.uploadImage(req.file);
  res.status(httpStatus.CREATED).send({
    location: image,
  });
})

const uploadImages = catchAsync(async (req, res) => {
  const images = await uploadService.uploadImages(req.files);
  res.status(httpStatus.CREATED).send({
    location: images,
  });
})

module.exports = {
  uploadImage, uploadImages,
}

// Path: upload.service.js
