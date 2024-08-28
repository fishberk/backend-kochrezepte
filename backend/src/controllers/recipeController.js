import Recipe from "../models/recipe.js";

export async function getRecipes() {
  try {
    return await Recipe.find();
  } catch (err) {
    console.log(err);
  }
}
