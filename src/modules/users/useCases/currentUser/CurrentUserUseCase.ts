import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { IUsersPublic } from "../../repository/IUsersRepository";

export class CurrentUserUseCase {
    constructor(private usersRepository: MysqlUsersRepository) { }
    async execute(id: number): Promise<IUsersPublic> {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }

        Object.assign(user, { senha: undefined });
        return user;
    }
}