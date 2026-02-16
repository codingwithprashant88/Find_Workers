const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      index: true, // helps search by role
    },

    price: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        enum: ["daily", "monthly"],
        default: "daily",
      },
    },

    city: {
      type: String,
      required: true,
      index: true,
    },

    state: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
      index: true,
    },

    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const JobsModel = mongoose.model("jobs", JobsSchema);
module.exports = JobsModel;
