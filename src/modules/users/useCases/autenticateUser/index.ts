import { MysqlUsersRepository } from "../../repository/implementations/MysqlUsersRepository";
import { AutenticateUserController } from "./AutenticateUserController";
import { AutenticateUserUseCase } from "./AutenticateUserUseCase";

export default () => { 
    const usersRepository = new MysqlUsersRepository();
    const autenticateUserUseCase = new AutenticateUserUseCase(usersRepository);
    const autenticateUserController = new AutenticateUserController(autenticateUserUseCase);

    return autenticateUserController;
}