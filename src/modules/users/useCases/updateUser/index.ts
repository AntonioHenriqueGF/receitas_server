import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export default() => {
    const usersRepository = new MysqlUsersRepository();
    const updateUserUseCase = new UpdateUserUseCase(usersRepository);
    const updateUserController = new UpdateUserController(updateUserUseCase);

    return updateUserController;
};