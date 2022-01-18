import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/User';
import { Category } from './Category';

@Entity('receitas')
export class Recipe {
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    id_usuarios: number;

    @Column()
    id_categorias: number;

    @Column()
    nome: string;

    @Column()
    tempo_preparo_minutos: number;

    @Column()
    porcoes: number;

    @Column()
    modo_preparo: string;

    @Column()
    ingredientes: string;

    @CreateDateColumn()
    criado_em?: Date;

    @CreateDateColumn()
    alterado_em?: Date;

    @ManyToOne(() => User, { eager: true })
    @JoinColumn({ name: 'id_usuarios' })
    usuario?: User;

    @ManyToOne(() => Category, { eager: true })
    @JoinColumn({ name: 'id_categorias' })
    categoria?: Category;
}