import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { CreateUsersController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default() => {
    const usersRepository = new MysqlUsersRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);
    const createUserController = new CreateUsersController(createUserUseCase);

    return createUserController;
};