import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { MysqlUsersRepository } from "../modules/users/repository/implementations/MysqlUsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAutenticated(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
    response.header("Access-Control-Allow-Origin", "*");
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({
            message: "Token não enviado",
            status: "error"
        });
    }
    const [, token] = authHeader.split(" ");
    try {
        const decoded = verify(token, "176f5bb46937cf4d3cbff872003dea91") as IPayload;
        const { sub } = decoded;
        const usersRepository = new MysqlUsersRepository();
        const user = await usersRepository.findById(Number(sub));
        if (!user) {
            return response.status(401).json({
                message: "Usuário não encontrado",
                status: "error"
            });
        }
        request.body.id_usuarios = sub;
        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token inválido",
            status: "error"
        });
    }
}