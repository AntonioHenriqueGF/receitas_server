import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";

interface IUserDeleteDTO {
    id: number;
    senha: string;
}

export class DeleteUserUseCase {

    constructor(private usersRepository: MysqlUsersRepository) {}

    async execute( { id, senha }: IUserDeleteDTO ): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findById(id);

        if (!userAlreadyExists) {
            throw new Error("Usuário não encontrado.");
        }

        const userPasswordIsValid = await this.usersRepository.verifyPassword(id, senha);

        if (!userPasswordIsValid) {
            throw new Error("Invalid password.");
        }

        await this.usersRepository.delete(id);
    }
}