import { User } from "../../entities/User";
import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IResponse {
    user: {
        id: number
        nome: string;
        login: string;
    };
    token: string;
}

export class AutenticateUserUseCase {
    constructor(private usersRepository: MysqlUsersRepository) { }
    async execute(login: string, senha: string): Promise<IResponse> {
        const user = await this.usersRepository.findByLogin(login);
        if (!user) {
            throw new Error('Usuário ou senha inválidos!');
        }
        const isValid = await compare(senha, user.senha);
        if (!isValid) {
            throw new Error('Usuário ou senha inválidos!');
        }
        const token = sign({ id: user.id, nome: user.nome, login: user.login }, '176f5bb46937cf4d3cbff872003dea91', { subject: String(user.id), expiresIn: '1d' });
        return { user: { id: user.id, nome: user.nome, login: user.login }, token };
    }
}