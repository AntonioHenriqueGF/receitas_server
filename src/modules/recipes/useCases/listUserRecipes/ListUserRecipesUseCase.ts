import { MysqlUsersRepository } from "../../../users/repository/implementations/MysqlUsersRepository";
import { Recipe } from "../../entities/Recipe";
import { MysqlRecipesRepository } from "../../repository/implementations/MysqlRecipesRepository";

export class ListUserRecipesUseCase {
    constructor(private recipesRepository: MysqlRecipesRepository, private usersRepository: MysqlUsersRepository) { }
    async execute(userId: number): Promise<Recipe[]> {
        const ownerExists = this.usersRepository.findById(userId);
        if (!ownerExists) {
            throw new Error("Usuário não encontrado.");
        }
        return await this.recipesRepository.findByOwner(userId);
    }
}