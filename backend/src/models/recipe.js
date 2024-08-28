const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true },
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
