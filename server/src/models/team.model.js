const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
  }
);


teamSchema.plugin(toJSON);
teamSchema.plugin(paginate);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
