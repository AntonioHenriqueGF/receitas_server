import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUpdateUserDTO, IUsersPublic, IUsersRepository } from "../IUsersRepository";

export class MysqlUsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }
    async findById(id: number): Promise<User> {
        const user = await this.repository.findOne({ id });
        return user;
    }
    async verifyPassword(id: number, senha: string): Promise<boolean> {
        const user = await this.repository.findOne({ id });
        if (!user) {
            throw new Error("User not found.");
        }
        return user.senha === senha;
    }
    async delete(id: number): Promise<void> {
        const user = await this.repository.findOne({ id });

        if (!user) {
            throw new Error("User not found.");
        }

        await this.repository.delete(id);
    }
    async update(id: number, { nome, login }: IUpdateUserDTO): Promise<void> {
        const user = await this.repository.findOne({ id });

        if (!user) {
            throw new Error("User not found.");
        }

        user.nome = nome;
        user.login = login;
        user.alterado_em = new Date();

        await this.repository.save(user);
    }
    async findByLogin(login: string): Promise<User> {
        const user = await this.repository.findOne({ login });
        return user;
    }
    async list(): Promise<IUsersPublic[]> {
        const users = await this.repository.find();
        return users.map(user => ({
            id: user.id,
            nome: user.nome,
            login: user.login,
            criado_em: user.criado_em,
            alterado_em: user.alterado_em
        }));
    }
    async create({ nome, login, senha }: ICreateUserDTO): Promise<void> {
        const category = this.repository.create({ 
            nome, 
            login, 
            senha,
            criado_em: new Date(),
            alterado_em: new Date()
        });

        await this.repository.save(category);
    }
}