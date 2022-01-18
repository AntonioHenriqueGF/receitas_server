import { Request, Response } from "express";
import { UpdateRecipeUseCase } from "./UpdateRecipeUseCase";

export class UpdateRecipeController {
    constructor(private updateRecipeUseCase: UpdateRecipeUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id, id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes } = request.body;
            await this.updateRecipeUseCase.execute(id, id_usuarios, { id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes });
            return response.status(204).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}