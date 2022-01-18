import { Router } from "express";
import { ensureAutenticated } from "../middlewares/ensureAutenticated";
import createRecipeController from "../modules/recipes/useCases/createRecipe";
import deleteRecipeController from "../modules/recipes/useCases/deleteRecipe";
import listUserRecipesController from "../modules/recipes/useCases/listUserRecipes";
import updateRecipeController from "../modules/recipes/useCases/updateRecipe";

const recipesRouts = Router();

recipesRouts.use(ensureAutenticated);

recipesRouts.get("/", (req, res) => {
    return listUserRecipesController().handle(req, res);
});

recipesRouts.post("/", (req, res) => {
    return createRecipeController().handle(req, res);
});

recipesRouts.put("/", (req, res) => {
    return updateRecipeController().handle(req, res);
});

recipesRouts.delete("/", (req, res) => {
    return deleteRecipeController().handle(req, res);
});

export { recipesRouts };