const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const {reviewService} = require('../services');

const createReview = catchAsync(async (req, res) => {
  const review = await reviewService.createReview(req.body);
  res.status(httpStatus.CREATED).send(review);
});

const getReviews = catchAsync(async (req, res) => {
  const reviews = await reviewService.getReviews();
  res.send(reviews);
});

const getReview = catchAsync(async (req, res) => {
  const review = await reviewService.getReviewById(req.params.reviewId);
  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }
  res.send(review);
});

const featureReview = catchAsync(async (req, res) => {
  const review = await reviewService.featureReview(req.params.reviewId);
  res.send(review);
});

const getFeaturedReviews = catchAsync(async (req, res) => {
  const reviews = await reviewService.getFeaturedReviews();
  res.send(reviews);
});

const removeFeaturedReview = catchAsync(async (req, res) => {
  const review = await reviewService.removeFeaturedReview(req.params.reviewId);
  res.send(review);
});

const deleteReview = catchAsync(async (req, res) => {
  await reviewService.deleteReviewById(req.params.reviewId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createReview,
  getReviews,
  getReview,
  deleteReview,
  getFeaturedReviews,
  featureReview,
  removeFeaturedReview,
};
