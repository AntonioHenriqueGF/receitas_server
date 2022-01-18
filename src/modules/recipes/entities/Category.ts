import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './Recipe';

@Entity('categorias')
export class Category {
    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column()
    nome: string;

    @OneToMany(() => Recipe, recipe => recipe.categoria)
    receitas?: Recipe[];
}