import { Category } from "../entities/Category";

export interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    findById(id: number): Promise<Category>;
    findByRecipe(id_receitas: number): Promise<Category[]>;
    list(): Promise<Category[]>;
}