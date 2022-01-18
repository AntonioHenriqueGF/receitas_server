import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1642181525775 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'teste_receitas_rg_sistemas.usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isNullable: false,
                        length: '10'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    },
                    {
                        name: 'login',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'criado_em',
                        type: 'datetime',
                        isNullable: false,
                        comment: 'now()',
                    },
                    {
                        name: 'alterado_em',
                        type: 'datetime',
                        isNullable: false,
                        comment: 'now()',
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teste_receitas_rg_sistemas.usuarios');
    }

}
