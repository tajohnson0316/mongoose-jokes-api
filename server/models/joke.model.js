const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "All jokes require a setup."],
      minlength: [10, "The setup must be at least 10 characters in length."],
    },
    punchline: {
      type: String,
      required: [true, "All jokes require a punchline."],
      minlength: [3, "The punchline must be at least 3 characters in length."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Joke", JokeSchema);
