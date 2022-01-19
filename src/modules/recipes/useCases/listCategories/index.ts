import { MysqlCategoriesRepository } from "../../repository/implementations/MysqlCategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default () => {
    const categoriesRepositories = new MysqlCategoriesRepository();
    const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepositories);
    const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

    return listCategoriesController;
}