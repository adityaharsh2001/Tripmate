const express = require('express');
const auth = require('../../middlewares/auth');
const packageController = require('../../controllers/package.controller');
const {uploadController} = require("../../controllers");
const upload = require("../../middlewares/upload");
const router = express.Router();

router
  .route('/packages')
  .post(packageController.createPackage)
  .get(packageController.getPackages);

router
  .route('/package/:packageId')
  .get(packageController.getPackage)
  .patch(auth(), packageController.updatePackage)
  .delete(auth(), packageController.deletePackage);

router.route('/featured').get(packageController.getFeaturedPackages);
router
  .route('/categories')
  .post(auth(), packageController.createCategory)
  .get(packageController.getCategories);

router
  .route('/categories/:categoryId')
  .patch(auth(), packageController.updateCategory)
  .delete(auth(), packageController.deleteCategory);

router
  .route('/upload/images')
  .post(upload.array('images', 10), uploadController.uploadImages);

router.post('/upload/image', upload.single('image'), uploadController.uploadImage);

module.exports = router;

