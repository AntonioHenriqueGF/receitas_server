import { Request, Response } from "express";
import { DeleteRecipeUseCase } from "./DeleteRecipeUseCase";

export class DeleteRecipeController {
    constructor(private deleteRecipeUseCase: DeleteRecipeUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id, id_usuarios } = request.body;
            await this.deleteRecipeUseCase.execute(id, id_usuarios);
            return response.status(204).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}