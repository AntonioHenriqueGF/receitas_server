import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { CurrentUserController } from "./CurrentUserController";
import { CurrentUserUseCase } from "./CurrentUserUseCase";

export default() => {
    const usersRepository = new MysqlUsersRepository();
    const currentUserUseCase = new CurrentUserUseCase(usersRepository);
    const currentUserController = new CurrentUserController(currentUserUseCase);

    return currentUserController;
}