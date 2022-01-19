import { Category } from "../../entities/Category";
import { MysqlCategoriesRepository } from "../../repository/implementations/MysqlCategoriesRepository";

export class ListCategoriesUseCase {
    constructor(private categoriesRepository: MysqlCategoriesRepository) {}
    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}