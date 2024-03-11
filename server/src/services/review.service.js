const httpStatus = require('http-status');
const Review = require('../models/review.model');
const ApiError = require('../utils/ApiError');


const createReview = async (reviewBody) => {
  return Review.create(reviewBody);
}

const getReviews = async () => {
  return Review.find();
}

const getReviewById = async (id) => {
  return Review.findById(id);
}

const featureReview = async (id) => {
  const review = await getReviewById(id);
  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }
  review.featured = true;
  await review.save();
  return review;
}

const getFeaturedReviews = async () => {
  return Review.find({featured: true});
}

const removeFeaturedReview = async (id) => {
  const review = await getReviewById(id);
  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }
  review.featured = false;
  await review.save();
  return review;
}
const deleteReviewById = async (id) => {
  const review = await getReviewById(id);
  if (!review) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review not found');
  }
  await review.remove();
  return review;
}

module.exports = {
  createReview, getReviews, getReviewById, deleteReviewById, featureReview, getFeaturedReviews, removeFeaturedReview
}

