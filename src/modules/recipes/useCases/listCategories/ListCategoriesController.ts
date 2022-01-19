import { Request, Response } from "express";
import { MysqlCategoriesRepository } from "../../repository/implementations/MysqlCategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const categories = await this.listCategoriesUseCase.execute();
            return res.status(200).json(categories);
        } catch (err) {
            throw new Error(`Erro inesperado: ${err.message}`);
        }
    }
}