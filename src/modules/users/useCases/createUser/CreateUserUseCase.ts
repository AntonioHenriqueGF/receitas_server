import { hash } from "bcrypt";
import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";

interface IUser {
    nome: string;
    login: string;
    senha: string;
}

export class CreateUserUseCase {

    constructor(private usersRepository: MysqlUsersRepository) {}

    async execute( { nome, login, senha }: IUser): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByLogin(login);

        if (userAlreadyExists) {
            throw new Error("Este login já está em uso.");
            
        }
        const senhaHash = await hash(senha, 8);

        await this.usersRepository.create({ nome, login, senha: senhaHash });
    }
}