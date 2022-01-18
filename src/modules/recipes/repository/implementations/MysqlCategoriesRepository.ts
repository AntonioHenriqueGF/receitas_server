import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

export class MysqlCategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;
    constructor(){
        this.repository = getRepository(Category);
    }
    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({
            where: {
                nome: name
            }
        });
        return category;
    }
    async findById(id: number): Promise<Category> {
        const category = await this.repository.findOne(id);
        return category;
    }
    async findByRecipe(id_receitas: number): Promise<Category[]> {
        const categories = await this.repository.find({
            where: {
                id_receitas
            }
        });
        return categories;
    }
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
}