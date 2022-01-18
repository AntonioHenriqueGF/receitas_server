import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";
import { UpdateRecipeController } from "./UpdateRecipeController";
import { UpdateRecipeUseCase } from "./UpdateRecipeUseCase";

export default() => {
    const recipesRepository = new MysqlRecipesRepository();
    const updateRecipeUseCase = new UpdateRecipeUseCase(recipesRepository);
    const updateRecipeController = new UpdateRecipeController(updateRecipeUseCase);

    return updateRecipeController; 
};