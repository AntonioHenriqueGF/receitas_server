import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";

export class DeleteRecipeUseCase {
    constructor(private recipesRepository: MysqlRecipesRepository) { }
    async execute(id: number, id_usuarios: number): Promise<void> {
        const recipeExists = await this.recipesRepository.findById(id);
        if (!recipeExists || recipeExists?.id_usuarios != id_usuarios) {
            throw new Error("Receita não encontrada.");
        }
        await this.recipesRepository.delete(id);
    }
}