import { getRepository, Repository } from "typeorm";
import { Recipe } from "../../entities/Recipe";
import { ICreateRecipeDTO, IRecipesRepository, IUpdateRecipeDTO } from "../IRecipesRepository";

export class MysqlRecipesRepository implements IRecipesRepository {
    private repository: Repository<Recipe>;
    constructor() {
        this.repository = getRepository(Recipe);
    }
    async create({ id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: ICreateRecipeDTO): Promise<void> {
        const recipe = this.repository.create({
            id_usuarios,
            id_categorias,
            nome,
            tempo_preparo_minutos,
            porcoes,
            modo_preparo,
            ingredientes,
            criado_em: new Date(),
            alterado_em: new Date()
        });
        await this.repository.save(recipe);
    }
    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
    async update(id: number, { id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: IUpdateRecipeDTO): Promise<void> {
        const recipe = await this.repository.findOne(id);
        if (!recipe) {
            throw new Error("Recipe not found.");
        }
        Object.assign(recipe, {
            id_categorias,
            nome,
            tempo_preparo_minutos,
            porcoes,
            modo_preparo,
            ingredientes
        });
        recipe.alterado_em = new Date();
        await this.repository.save(recipe);
    }
    async findByName(name: string): Promise<Recipe> {
        const recipe = await this.repository.findOne({
            where: {
                nome: name
            }
        });
        return recipe;
    }
    async findById(id: number): Promise<Recipe> {
        const recipe = await this.repository.findOne(id);
        return recipe;
    }
    async findByOwner(id_usuarios: number): Promise<Recipe[]> {
        const recipes = await this.repository.find({
            where: {
                id_usuarios
            }
        });
        return recipes;
    }
    async findByOwnerAndName(id_usuarios: number, nome: string): Promise<Recipe> {
        const recipe = await this.repository.findOne({
            where: {
                id_usuarios,
                nome
            }
        });
        return recipe;
    }
    async list(): Promise<Recipe[]> {
        const recipes = await this.repository.find();
        return recipes;
    }

}