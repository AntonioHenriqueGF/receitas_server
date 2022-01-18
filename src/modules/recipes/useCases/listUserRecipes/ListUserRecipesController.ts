import { Request, Response } from "express";
import { ListUserRecipesUseCase } from "./ListUserRecipesUseCase";

export class ListUserRecipesController {
    constructor(private listUserRecipesUseCase: ListUserRecipesUseCase) { }
    async handle( request: Request, response: Response): Promise<Response> {
        try {
            const { id_usuarios } = request.body;
            const recipes = await this.listUserRecipesUseCase.execute(id_usuarios);
            recipes.forEach(recipe => {
                recipe.usuario.senha = undefined;
            });
            return response.status(200).json(recipes);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}