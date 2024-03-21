const mongoose = require('mongoose');
const {toJSON} = require('./plugins');
const {tokenTypes} = require('../config/tokens');

// Define sub-schema for the 'fields' array
const fieldSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: [String], // Array of strings
      default: [],
      trim: true,
    },
  },
  {_id: false} // Disable generation of _id for sub-documents
);

// Define sub-schema for the 'tourPlan' array
const tourPlanSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: [String], // Array of strings
      default: [],
      trim: true,
    },
  },
  {_id: false} // Disable generation of _id for sub-documents
);

const packageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    cardDescription: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    category: {
      type: 'String', // 'String' is used here to avoid circular dependency problem
      ref: 'Category', // Referencing Category model
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    fields: [fieldSchema], // Embed fieldSchema as sub-document array
    images: {
      type: [String], // Array of strings (image URLs)
      default: [],
    },
    featuredImage: {
      type: String,
    },
    tourPlan: [tourPlanSchema], // Embed tourPlanSchema as sub-document array
  },
  {
    timestamps: true,
  }
);

packageSchema.plugin(toJSON);

/**
 * @typedef Package
 */
const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
