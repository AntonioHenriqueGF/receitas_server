import { Recipe } from "../entities/Recipe";

export interface ICreateRecipeDTO {
    id_usuarios: number;
    id_categorias: number;
    nome: string;
    tempo_preparo_minutos: number;
    porcoes: number;
    modo_preparo: string;
    ingredientes: string;
}

export type IUpdateRecipeDTO = Omit<Recipe, "id" | "id_usuarios" | "criado_em" | "alterado_em" | "usuario" | "categoria">;

// export interface IUpdateRecipeDTO {
//     id_categorias: number;
//     nome: string;
//     tempo_preparo_minutos: number;
//     porcoes: number;
//     modo_preparo: string;
//     ingredientes: string;
// }

export interface IRecipesRepository {
    create({ id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: ICreateRecipeDTO): Promise<void>;
    delete(id: number): Promise<void>;
    update(id: number, { id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: IUpdateRecipeDTO): Promise<void>;
    findByName(name: string): Promise<Recipe>;
    findById(id: number): Promise<Recipe>;
    findByOwner(id_usuarios: number): Promise<Recipe[]>;
    findByOwnerAndName(id_usuarios: number, nome: string): Promise<Recipe>;
    list(): Promise<Recipe[]>;
}
