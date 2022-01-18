import { ICreateRecipeDTO } from "../../repository/IRecipesRepository";
import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";
import { MysqlUsersRepository } from "../../../users/repository/implementations/MysqlUsersRepository";
import { MysqlCategoriesRepository } from "../../repository/implementations/MysqlCategoriesRepository";

export class CreateRecipeUseCase {
    constructor(private recipesRepository: MysqlRecipesRepository, private usersRepository: MysqlUsersRepository, private categoriesRepositories: MysqlCategoriesRepository) {}
    async execute( { id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: ICreateRecipeDTO): Promise<void> {
        const userExists = await this.usersRepository.findById(id_usuarios);
        if (!userExists) {
            throw new Error("Usuário não encontrado.");
        }

        const categoryIsValid = await this.categoriesRepositories.findById(id_categorias);

        if (!categoryIsValid) {
            throw new Error("Categoria não encontrada.");
        }
        
        const recipeAlreadyExists = await this.recipesRepository.findByOwnerAndName(id_usuarios, nome);

        if (recipeAlreadyExists) {
            throw new Error("Este usuário já possui uma receita com este nome.");
        }

        await this.recipesRepository.create({ id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes });
    }
}