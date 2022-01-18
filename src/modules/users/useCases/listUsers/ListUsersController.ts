import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    constructor(private listUsersUseCase: ListUsersUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.listUsersUseCase.execute();
            return response.status(200).json(users);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
                status: "error"
            });
        }
    }
}