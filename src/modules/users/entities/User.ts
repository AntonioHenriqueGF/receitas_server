import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from '../../recipes/entities/Recipe';

@Entity('usuarios')
export class User {
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    nome: string;

    @Column()
    login: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    criado_em?: Date;

    @CreateDateColumn()
    alterado_em?: Date;

    @OneToMany(() => Recipe, recipe => recipe.usuario)

    receitas?: Recipe[];
}