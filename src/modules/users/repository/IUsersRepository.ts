import { User } from "../entities/User";

// DTO = Data Transfer Object

export type ICreateUserDTO = Pick<User, "nome" | "login" | "senha">;

export type IUpdateUserDTO = Pick<User, "nome" | "login">;

export type IUsersPublic = Omit<User, "senha" | "receitas">;

// Interface

export interface IUsersRepository {
    findByLogin(login: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
    verifyPassword(id: number, senha: string): Promise<boolean>;
    list(): Promise<IUsersPublic[]>;
    create({ nome, login, senha }: ICreateUserDTO): Promise<void>;
    delete(id: number): Promise<void>;
    update(id: number, { nome, login }: IUpdateUserDTO): Promise<void>;
}