import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export default() => {
    const usersRepository = new MysqlUsersRepository();
    const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
    const deleteUserController = new DeleteUserController(deleteUserUseCase);
    
    return deleteUserController;
};