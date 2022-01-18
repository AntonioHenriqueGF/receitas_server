import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";
import { IUpdateRecipeDTO } from "../../repository/IRecipesRepository";

export class UpdateRecipeUseCase {
    constructor(private recipesRepository: MysqlRecipesRepository) { }
    async execute(id: number, id_usuarios: number, recipe: IUpdateRecipeDTO): Promise<void> {
        const recipeExists = await this.recipesRepository.findById(id);
        if (!recipeExists || recipeExists?.id_usuarios != id_usuarios) {
            throw new Error("Receita não encontrada.");
        }
        await this.recipesRepository.update(id, recipe);
    }
}