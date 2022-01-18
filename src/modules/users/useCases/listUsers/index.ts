import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default() => {
    const usersRepository = new MysqlUsersRepository();
    const listUsersUseCase = new ListUsersUseCase(usersRepository);
    const listUsersController = new ListUsersController(listUsersUseCase);

    return listUsersController;
};