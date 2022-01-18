import { Request, Response } from "express";
import { AutenticateUserUseCase } from "./AutenticateUserUseCase";

export class AutenticateUserController {
    constructor(private autenticateUserUseCase: AutenticateUserUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { login, senha } = request.body;
            const auth = await this.autenticateUserUseCase.execute(login, senha);
            
            return response.status(200).json(auth);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}