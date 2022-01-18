import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id, senha } = request.body;
            await this.deleteUserUseCase.execute({id, senha});
            return response.status(200).json({
                message: "Usuário deletado com sucesso",
                status: "success"
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}