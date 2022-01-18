import { Request, Response } from "express";
import { CreateRecipeUseCase } from "./CreateRecipeUseCase";

export class CreateRecipeController {
    constructor(private createRecipeUseCase: CreateRecipeUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes } = request.body;
            await this.createRecipeUseCase.execute({ id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes });
            return response.status(201).send();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}