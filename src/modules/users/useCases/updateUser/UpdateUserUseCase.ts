import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { IUpdateUserDTO } from "../../repository/IUsersRepository";

export class UpdateUserUseCase {
    constructor(private usersRepository: MysqlUsersRepository) { }
    async execute(id: number, { nome, login }: IUpdateUserDTO ): Promise<void> {
        const userExists = await this.usersRepository.findById(id);
        if (!userExists) {
            throw new Error("Usuário não encontrado.");
        }
        await this.usersRepository.update(id, { nome, login });
    }
}