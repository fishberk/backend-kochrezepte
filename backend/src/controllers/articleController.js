import Recipe from "../models/recipe";

export async function getRecipes() {
  try {
    return await Recipe.find();
  } catch (err) {
    console.log(err);
  }
}
