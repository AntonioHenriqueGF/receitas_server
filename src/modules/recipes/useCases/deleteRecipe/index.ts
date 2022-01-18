import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";
import { DeleteRecipeController } from "./DeleteRecipeController";
import { DeleteRecipeUseCase } from "./DeleteRecipeUseCase";

export default() => {
    const recipesRepository = new MysqlRecipesRepository();
    const deleteRecipeUseCase = new DeleteRecipeUseCase(recipesRepository);
    const deleteRecipeController = new DeleteRecipeController(deleteRecipeUseCase)

    return deleteRecipeController;
};