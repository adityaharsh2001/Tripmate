const upload = require('../middlewares/upload');
const {Package} = require('../models');

const uploadImage = (file) => {
  return file.location;
}

const uploadImages = (file) => {
  return file.map((f) => f.location);
}

module.exports = {
  uploadImage,
  uploadImages,
}
