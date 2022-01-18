import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUsersController {

    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { nome, login, senha } = request.body;
            await this.createUserUseCase.execute({ nome, login, senha });
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