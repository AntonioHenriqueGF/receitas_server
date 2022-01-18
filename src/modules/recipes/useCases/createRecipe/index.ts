import { MysqlUsersRepository } from "../../../users/repository/implementations/MysqlUsersRepository";
import { MysqlCategoriesRepository } from "../../repository/implementations/MysqlCategoriesRepository";
import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";
import { CreateRecipeController } from "./CreateRecipeController";
import { CreateRecipeUseCase } from "./CreateRecipeUseCase";

export default() => {
    const usersRepository = new MysqlUsersRepository();
    const recipesRepository = new MysqlRecipesRepository();
    const categoriesRepositories = new MysqlCategoriesRepository();
    const creataeRecipeUseCase = new CreateRecipeUseCase(recipesRepository, usersRepository, categoriesRepositories);
    const createRecipeController = new CreateRecipeController(creataeRecipeUseCase);

    return createRecipeController;
}