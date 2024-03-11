const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
   email: {
      type: String,
      required: true,
      trim: true,
    },
    review: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
    featured : {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  }
);


// reviewSchema.plugin(toJSON);
reviewSchema.plugin(paginate);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;



