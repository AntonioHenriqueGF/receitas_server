import { MysqlUsersRepository } from "../../../users/repository/implementations/MysqlUsersRepository";
import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";
import { ListUserRecipesController } from "./ListUserRecipesController";
import { ListUserRecipesUseCase } from "./ListUserRecipesUseCase";

export default() => {
    const recipesRepository = new MysqlRecipesRepository();
    const usersRepository = new MysqlUsersRepository();
    const listUserRecipesUseCase = new ListUserRecipesUseCase(recipesRepository, usersRepository);
    const listUserRecipesController = new ListUserRecipesController(listUserRecipesUseCase);

    return listUserRecipesController;
};