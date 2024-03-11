const express = require('express');
const auth = require('../../middlewares/auth');
const {reviewController} = require('../../controllers');
const router = express.Router();

router
  .route('/reviews')
  .post(reviewController.createReview)
  .get(reviewController.getReviews);

router
  .route('/review/:reviewId')
  .get(reviewController.getReview)
  .patch(reviewController.featureReview)
  .delete(auth(), reviewController.deleteReview);

router
  .route('/featured')
  .get(reviewController.getFeaturedReviews)

router
  .route('/remove-featured/:reviewId')
  .patch(reviewController.removeFeaturedReview);

module.exports = router;

