import { Request, Response } from "express";
import { CurrentUserUseCase } from "./CurrentUserUseCase"

export class CurrentUserController {
    constructor(private currentUserUseCase: CurrentUserUseCase) {  }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_usuarios } = request.body;
            const user = await this.currentUserUseCase.execute(id_usuarios);
            return response.status(200).json(user);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}