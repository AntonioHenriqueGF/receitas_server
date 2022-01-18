import { Recipe } from "../../entities/Recipe";
import { ICreateRecipeDTO, IRecipesRepository, IUpdateRecipeDTO } from "../IRecipesRepository";

export class RecipesRepository implements IRecipesRepository {
    private recipes: Recipe[];
    private static INSTANCE: RecipesRepository;

    private constructor() {
        this.recipes = [];
    }
    create({ id_usuarios, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: ICreateRecipeDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: number, { id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: IUpdateRecipeDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
    findByOwner(id_usuario: number): Promise<Recipe[]> {
        throw new Error("Method not implemented.");
    }
    findByOwnerAndName(id_usuario: number, nome: string): Promise<Recipe> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<Recipe[]> {
        throw new Error("Method not implemented.");
    }
    public static getInstance(): RecipesRepository {
        if (!RecipesRepository.INSTANCE) {
            RecipesRepository.INSTANCE = new RecipesRepository();
        }
        return RecipesRepository.INSTANCE;
    }
    // findByOwnerAndName(id_usuario: number, nome: string): Recipe {
    //     return this.recipes.find(recipe => recipe.id_usuario === id_usuario && recipe.nome === nome);
    // }
    // delete(id: number): void {
    //     const recipeIndex = this.recipes.findIndex(recipe => recipe.id === id);
    //     this.recipes.splice(recipeIndex, 1);
    // }
    // update(id: number, { nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: IUpdateRecipeDTO): void {
    //     const recipeIndex = this.recipes.findIndex(recipe => recipe.id === id);
    //     Object.assign(this.recipes[recipeIndex], {
    //         nome,
    //         tempo_preparo_minutos,
    //         porcoes,
    //         modo_preparo,
    //         ingredientes,
    //         alterado_em: new Date()
    //     });
    // }
    // findById(id: number): Recipe {
    //     return this.recipes.find(recipe => recipe.id === id);
    // }
    // findByOwner(id_usuario: number): Recipe[] {
    //     return this.recipes.filter(recipe => recipe.id_usuario === id_usuario);
    // }

    // create({ id_usuario, id_categorias, nome, tempo_preparo_minutos, porcoes, modo_preparo, ingredientes }: ICreateRecipeDTO): void {
    //     const recipe = new Recipe();

    //     Object.assign(recipe, {
    //         id_usuario,
    //         id_categorias,
    //         nome,
    //         tempo_preparo_minutos,
    //         porcoes,
    //         modo_preparo,
    //         ingredientes
    //     });

    //     this.recipes.push(recipe);
    // }

    // findByName(name: string): Recipe {
    //     return this.recipes.find(recipe => recipe.nome === name);
    // }

    // list(): Recipe[] {
    //     return this.recipes;
    // }
}