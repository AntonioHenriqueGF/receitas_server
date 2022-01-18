import { IUsersPublic } from "../../repository/IUsersRepository";
import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";

export class ListUsersUseCase {
    constructor(private usersRepository: MysqlUsersRepository) { }
    async execute(): Promise<IUsersPublic[]> {
        return await this.usersRepository.list();
    }
}